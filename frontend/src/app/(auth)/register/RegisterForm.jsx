"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RegisterBody } from "@/schemaValidations/auth.schema";
import { useState } from "react";
export default function RegisterForm() {
  const [value, setValue] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const parsed = RegisterBody.safeParse(value);
      if (!parsed.success) {
        let errArr = [];
        const { errors: err } = parsed.error;
        for (var i = 0; i < err.length; i++) {
          errArr.push({ for: err[i].path[0], message: err[i].message });
        }
        console.log(errArr);
        setErrors(errArr);
        throw err;
      } else {
        setValue({
          email: "",
          password: "",
          confirmPassword: "",
        });
        console.log(value);
        // call api
      }
      setErrors([]);
    } catch (error) {
      console.error(error);
    }
  };
  const handleChange = (e) => {
    setValue((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return (
    <form onSubmit={handleSubmit} className="mt-5 w-full ">
      <div className="flex flex-col gap-5 items-center">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="font-bold text-gray text-xs" htmlFor="email">
            Email
          </Label>
          <Input
            className="focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            value={value.email}
            onChange={handleChange}
          />
          <div className="mt-1 text-xs text-red">
            {errors.find((error) => error.for === "email")?.message}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="font-bold text-gray text-xs" htmlFor="password">
            Password
          </Label>
          <Input
            className="focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={value.password}
            onChange={handleChange}
          />
          <div className="mt-1 text-xs text-red">
            {errors.find((error) => error.for === "password")?.message}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label
            className="font-bold text-gray text-xs"
            htmlFor="confirmPassword"
          >
            Password Confirm
          </Label>
          <Input
            className="focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Password Confirm"
            value={value.confirmPassword}
            onChange={handleChange}
          />
          <div className="mt-1 text-xs text-red">
            {errors.find((error) => error.for === "confirmPassword")?.message}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 mt-4 mb-10 ">
        <Button className="hover:bg-[#02A189] w-full bg-[#00BA9D] border-min border-solid border-[#01C8A9] rounded-[23px] max-w-sm text-base font-semibold">
          Sign Up
        </Button>
      </div>
    </form>
  );
}
