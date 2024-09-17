"use client";
import {
  Image as ImageIcon,
  MessageSquareText,
  SendHorizontal,
  X,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import messageApiRequest from "@/apiRequests/message";
import { convertTimeMessage, handleAddMessage } from "@/lib/utils";
import userApiRequest from "@/apiRequests/users";
import { socket } from "@/socket";
export default function ChatBox() {
  const [isShowChat, setIsShowChat] = useState(false);
  const [listMessage, setListMessage] = useState();
  const [valueMessage, setValueMessage] = useState("");
  const [listConversation, setListConversation] = useState([]);
  const [activeUser, setActiveUser] = useState(null);
  const [user, setUser] = useState();
  const [isShowTyping, setIsShowTyping] = useState(false);
  const messageEndRef = useRef(null);
  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [listMessage]);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
    if (user.role === "user") {
      const fetchApi = async () => {
        const { data } = await messageApiRequest.getMessage(user._id);
        setListMessage(data);
      };
      fetchApi();
    }
    if (user.role === "admin") {
      const fetchApi = async () => {
        const { data } = await userApiRequest.getUserRoleUser();
        setListConversation(data);
      };
      fetchApi();
    }
  }, []);
  useEffect(() => {
    const handleMessage = (data) => {
      setListMessage((prev) => {
        const newListMessage = handleAddMessage(prev, data.date, data);
        return [...newListMessage];
      });
    };
    const handleTurnOffTyping = () => {
      setIsShowTyping(false);
    };
    socket.on("getMessage", handleMessage);
    socket.on("getTurnOffTypeMessage", handleTurnOffTyping);
    return () => {
      socket.off("getMessage", handleMessage);
      socket.off("getTurnOffTypeMessage", handleTurnOffTyping);
    };
  }, []);
  useEffect(() => {
    const handleTypeMessage = () => {
      setIsShowTyping(!isShowTyping);
    };
    socket.on("typeMessage", handleTypeMessage);
    return () => {
      socket.off("typeMessage", handleTypeMessage);
    };
  }, [valueMessage]);
  const handleShowChat = () => {
    setIsShowChat(!isShowChat);
  };
  const handleChangeMessage = (e) => {
    setValueMessage(e.target.value);
    socket.emit("sendTypeMessage", {
      receiver: activeUser,
      sender: user._id,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (valueMessage.trim() === "") {
      return;
    } else {
      const time = Date.now();
      const newMessage = {
        sender: user._id,
        content: valueMessage,
        receiver: activeUser,
        createdAt: time,
      };
      const currentDate = new Date();
      const formattedCurrentDate = currentDate.toISOString().split("T")[0];
      setListMessage((prev) => {
        const newListMessage = handleAddMessage(
          prev,
          formattedCurrentDate,
          newMessage
        );
        return [...newListMessage];
      });
      setValueMessage("");
      await messageApiRequest.createMessage({
        sender: user._id,
        content: valueMessage,
        receiver: activeUser,
      });
      socket.emit("sendMessage", {
        ...newMessage,
        createdAt: convertTimeMessage(time),
        date: formattedCurrentDate,
      });
    }
  };
  const handleClickConversation = async (id) => {
    setActiveUser(id);
    const { data } = await messageApiRequest.getMessage(id);
    setListMessage(data);
  };
  const handleBlur = () => {
    socket.emit("sendTurnOffTypeMessage", {
      receiver: activeUser,
      sender: user._id,
    });
  };
  return (
    <>
      <div onClick={handleShowChat} className="fixed z-30 right-2 bottom-0">
        <div className="h-[48px] bg-accent rounded">
          <div className="flex items-center justify-start p-3 cursor-pointer gap-1 ">
            <MessageSquareText size={30} strokeWidth={1.5} />
            <span className="text-header text-xl font-semibold">Chat</span>
          </div>
        </div>
      </div>
      {isShowChat && (
        <div className="fixed z-50 right-2 bottom-0 drop-shadow-md">
          <div
            className={`${
              user?.role === "admin" ? "w-[620px] drop-shadow-sm" : "w-[416px]"
            }  h-[412px] bg-widget rounded`}
          >
            <div className="flex justify-between  items-center px-3 h-[40px] border-b border-solid border-inputBorder">
              <span className="tex-base font-semibold text-accent">Chat</span>
              <div onClick={handleShowChat} className="cursor-pointer p-1">
                <X size={18} strokeWidth={1.5} />
              </div>
            </div>
            <div className="flex h-full items-start">
              {user && user.role === "admin" ? (
                <div className="w-[224px] flex overflow-hidden flex-col gap-3 items-start">
                  <div className="w-full h-[48px] flex items-center px-2 py-3">
                    <input
                      className="hover:transition-all rounded-[4px]  focus:border-accent hover:border-accent bg-transparent w-full field-input outline-none h-[32px] px-[12px]  border-min border-solid"
                      type="text"
                      placeholder="Tìm kiếm"
                    />
                  </div>
                  <div className="w-full h-[310px] max-w-[224px] max-[310px] relative overflow-hidden">
                    {listConversation &&
                      listConversation.map((item, idx) => {
                        return (
                          <div
                            key={idx}
                            onClick={() => {
                              handleClickConversation(item._id);
                            }}
                            className={`h-[62px] cursor-pointer ${
                              activeUser === item._id ? "bg-background" : ""
                            }   flex gap-2 p-3 items-center w-full`}
                          >
                            <Image
                              width={100}
                              height={100}
                              className="w-[32px] h-[32px] rounded-full"
                              src={item.photo}
                              alt="avatar"
                            />
                            <div className="text-header font-medium text-base">
                              {item.name}
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              ) : (
                <></>
              )}
              <div
                className={`flex-1 h-full relative ${
                  user?.role === "admin"
                    ? " border-l border-solid border-accent"
                    : ""
                }`}
              >
                {user && user.role === "user" ? (
                  <>
                    <div className="pl-[32px] pb-[10px] pr-[30px] relative overflow-y-auto max-h-[316px]  h-[316px]">
                      <div className="message-list">
                        {listMessage?.map((day, idx) => (
                          <div key={idx}>
                            <div className="font-normal text-center text-xs text-header px-[6px] py-[10px] rounded-[8px]">
                              {day._id}
                            </div>
                            <div className="flex flex-col gap-5 py-4">
                              {day.messages.map((message, idx) => (
                                <div
                                  key={idx}
                                  className={`relative ${
                                    message.receiver !== user._id
                                      ? "self-end bg-[#d7f7ef]"
                                      : " bg-[#ebebf0]"
                                  }  min-w-[80px] pb-[15px] w-fit indent-1 max-w-[312px] text-black text-sm leading-5 rounded px-[10px] pt-2 py-[10px]`}
                                >
                                  {message.content}
                                  <div className="absolute  right-1 bottom-0 text-xs text-[#666] line-height: 1rem;">
                                    {convertTimeMessage(message.createdAt)}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                        <div ref={messageEndRef}></div>
                      </div>
                      <div className="flex h-3 justify-start items-center text-xs text-gray mt-1 gap-1">
                        {isShowTyping && (
                          <>
                            <span className="text-xs">
                              Quản trị đang soạn tin nhắn
                            </span>
                            <div className="flex gap-1">
                              <div className="h-1 w-1 bg-gray rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                              <div className="h-1 w-1 bg-gray rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                              <div className="h-1 w-1 bg-gray rounded-full animate-bounce"></div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="absolute bg-widget h-[60px] bottom- left-0 right-0 border-t border-solid border-accent">
                      <div className="flex items-center justify-between px-[10px] py-3">
                        <form className="flex-1" onSubmit={handleSubmit}>
                          <input
                            className="hover:transition-all focus:border-accent hover:border-accent bg-transparent w-full field-input outline-none h-[36px] px-[7px] pl-[12px] pr-[48px] rounded-lg border-min border-solid"
                            type="text"
                            value={valueMessage}
                            onBlur={handleBlur}
                            onChange={handleChangeMessage}
                            placeholder="Nhập nội dung chat..."
                          />
                          <div className="absolute right-[20px] bottom-[15px] cursor-pointer">
                            <button type="submit">
                              <SendHorizontal size={20} strokeWidth={1.25} />
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </>
                ) : (
                  <>{}</>
                )}
                {activeUser && user?.role === "admin" ? (
                  <>
                    <div className="pl-[32px] pb-[10px]  pr-[30px] relative overflow-y-auto max-h-[316px]  h-[316px]">
                      <div className="message-list">
                        {listMessage?.map((day, idx) => (
                          <div key={idx}>
                            <div className="font-normal text-center text-xs text-header px-[6px] py-[10px] rounded-[8px]">
                              {day._id}
                            </div>
                            <div className="flex flex-col gap-5 py-4">
                              {day.messages.map((message, idx) => (
                                <div
                                  key={idx}
                                  className={`relative ${
                                    message.receiver
                                      ? "self-end bg-[#d7f7ef] "
                                      : "bg-[#ebebf0]"
                                  }  min-w-[80px]  pb-[15px] w-fit indent-1 max-w-[312px] text-black text-sm leading-5 rounded px-[10px] pt-2 py-[10px]`}
                                >
                                  {message.content}
                                  <div className="absolute  right-1 bottom-0 text-xs text-[#666] line-height: 1rem;">
                                    {convertTimeMessage(message.createdAt) ||
                                      message.createdAt}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                        <div ref={messageEndRef}></div>
                      </div>

                      <div className="flex h-2 justify-start items-center text-xs text-gray mt-1 gap-1">
                        {isShowTyping && (
                          <>
                            <span className="text-xs">
                              Người dùng đang soạn tin nhắn
                            </span>
                            <div className="flex gap-1">
                              <div className="h-1 w-1 bg-gray rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                              <div className="h-1 w-1 bg-gray rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                              <div className="h-1 w-1 bg-gray rounded-full animate-bounce"></div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="absolute bg-widget h-[60px] bottom- left-0 right-0 border-t border-solid border-accent">
                      <div className="flex items-center justify-between px-[10px] py-3">
                        <form className="flex-1" onSubmit={handleSubmit}>
                          <input
                            className="hover:transition-all focus:border-accent hover:border-accent bg-transparent w-full field-input outline-none h-[36px] px-[7px] pl-[12px] pr-[48px] rounded-lg border-min border-solid"
                            type="text"
                            onBlur={handleBlur}
                            value={valueMessage}
                            onChange={handleChangeMessage}
                            placeholder="Nhập nội dung chat..."
                          />
                          <div className="absolute right-[20px] bottom-[15px] cursor-pointer">
                            <button type="submit">
                              <SendHorizontal size={20} strokeWidth={1.25} />
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-base w-full h-full flex items-center justify-center mt-auto font-normal text-header">
                    Chọn người bạn muốn trò chuyện
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
