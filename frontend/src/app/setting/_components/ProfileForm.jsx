"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Camera, Mail, MapPin, Phone } from "lucide-react";
import { useRef, useState } from "react";
import { ProfileBody } from "@/schemaValidations/ProfileBody";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { handleErrorApi } from "@/lib/utils";
import accountRequestApi from "@/apiRequests/account";
import { clientSessionToken } from "@/lib/http";
import Image from "next/image";
export default function ProfileForm({ profile }) {
  const [file, setFile] = useState(null);
  const inputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast({});
  const form = useForm({
    resolver: zodResolver(ProfileBody),
    defaultValues: {
      name: profile.name,
      address: profile.address || "",
      phone: profile.phone || "",
      email: profile.email,
      image: profile.photo,
    },
  });
  const image = form.watch("image");
  const onSubmit = async (values) => {
    if (loading) return;
    setLoading(true);
    try {
      const formData = new FormData();
      if (file) {
        formData.append("photo", file);
      }
      formData.append("name", values.name);
      formData.append("address", values.address);
      formData.append("email", values.email);
      formData.append("phone", values.phone);

      const result = await accountRequestApi.updateMe(
        formData,
        clientSessionToken.token.accessToken,
        JSON.parse(localStorage.getItem("user"))._id
      );
      toast({
        title: "Thông báo",
        description: "Update info user success",
        variant: "success",
        duration: 2000,
      });
      // router.refresh();
    } catch (error) {
      console.log(error);
      handleErrorApi({
        error,
        setError: form.setError,
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Form {...form}>
        <form
          encType="multipart/form-data"
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-3 grid gap-5 md:!grid-cols-2 xl:!grid-cols-[340px,_minmax(0,1fr)]"
        >
          <div className="grid gap-5 md:!grid-cols-2 md:col-span-2 xl:!grid-cols-1 xl:col-span-1">
            <div className="bg-widget grid gap-5 rounded-sm drop-shadow-main">
              <div className="md:p-[26px] p-[20px]  flex flex-col items-center justify-center">
                <div className="relative ">
                  <Avatar className="relative w-[110px] h-[110px] ">
                    <FormField
                      control={form.control}
                      name="image"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              type="file"
                              accept="image/*"
                              ref={inputRef}
                              className=" opacity-0 w-full h-full absolute"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  setFile(file);
                                  field.onChange(
                                    "http://localhost:3000/" + file.name
                                  );
                                }
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {(file || image) && (
                      <div>
                        <Image
                          src={file ? URL.createObjectURL(file) : image}
                          width={128}
                          height={128}
                          alt="preview"
                          className="w-32 h-32 object-cover"
                        />
                      </div>
                    )}
                  </Avatar>
                  <button
                    className="flex items-center justify-center absolute z-10 right-0 bottom-0 h-10 w-10 bg-green text-widget rounded-full border-[3px]
                                border-widget border-solid transition hover:bg-green-darker"
                  >
                    <Camera className="" size={20} />
                  </button>
                </div>
                <h4 className="text-2xl font-bold">{profile.name}</h4>
                <span className="rounded-md mt-2.5 min-w-[96px] bg-red text-center text-[13px] font-bold text-widget py-[2px] ">
                  {profile.role}
                </span>
                <p className="mb-[18px] mt-6 subheading-2 text-accent">
                  last visit 05/05/2024
                </p>
                <button className="w-full md:max-w-[280px] bg-accent text-white drop-shadow-[0 1px 8px rgba(3, 94, 207, 0.5)] rounded-[23px] px-[26px] text-base font-semibold cursor-pointer h-searchHeight">
                  Log Out
                </button>
              </div>
            </div>
            <div className="grid gap-5">
              <div className="md:p-[26px] p-[20px] bg-widget grid gap-5 rounded-sm drop-shadow-main  items-center">
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-4">
                    <span className="icon-wrapper mt-1">
                      <Mail size={20} />
                    </span>
                    {profile.email}
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="icon-wrapper mt-1.5">
                      <MapPin size={20} />
                    </span>
                    <span className="max-w-[156px]">
                      {profile.address ||
                        "312 3rd St, Albany, New York 12206, USA"}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="icon-wrapper mt-1">
                      <Phone size={20} />
                    </span>
                    {profile.phone || "0862172319"}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className=" flex flex-col gap-[30px] md:gap-12 md:row-start-2 md:col-span-2 md:!pb-[50px]
                    xl:row-start-1 xl:col-start-2 xl:col-span-1"
          >
            <div className="flex flex-col gap-5 bg-widget px-[26px] pt-[26px] pb-[50px] rounded-sm drop-shadow-main">
              <h5>My Profile Details</h5>

              <div className="grid  sm:grid-cols-2 gap-4">
                <div className="grid gap-4">
                  <>
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-bold text-gray text-xs">
                            Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="w-full focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                              type="text"
                              id="name"
                              placeholder="Name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="mt-1 text-xs text-red" />
                        </FormItem>
                      )}
                    />
                  </>
                  <>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-bold text-gray text-xs">
                            Email
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                              type="email"
                              id="email"
                              placeholder="Email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="mt-1 text-xs text-red" />
                        </FormItem>
                      )}
                    />
                  </>
                  <>
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-bold text-gray text-xs">
                            Phone
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                              type="text"
                              id="phone"
                              placeholder="Phone"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="mt-1 text-xs text-red" />
                        </FormItem>
                      )}
                    />
                  </>
                  <>
                    {/* <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-bold text-gray text-xs">
                            Mật khẩu
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                              type="password"
                              placeholder="Password"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="mt-1 text-xs text-red" />
                        </FormItem>
                      )}
                    /> */}
                  </>
                </div>
                <div className="grid gap-4">
                  <>
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-bold text-gray text-xs">
                            Address
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                              type="text"
                              id="address"
                              placeholder="Address"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="mt-1 text-xs text-red" />
                        </FormItem>
                      )}
                    />
                  </>
                </div>
              </div>
              <div className="mt-2 5 flex flex-col">
                <button className="text-left hover:underline transition-all font-bold text-base leading-[1.4] text-accent">
                  Change password
                </button>
                <button
                  type="submit"
                  className="hover:bg-[#02A189] rounded-[23px] px-[26px] text-base font-semibold cursor-pointer h-searchHeight bg-[#00BA9D] border-min border-solid border-[#01C8A9] text-white drop-shadow-[0 1px 10px rgba(2, 202, 171, 0.35)] w-full mt-5 md:w-fit md:px-[70px]"
                >
                  Update information
                </button>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </>
  );
}
