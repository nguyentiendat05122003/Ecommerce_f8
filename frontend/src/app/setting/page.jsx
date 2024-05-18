import accountRequestApi from "@/apiRequests/account";
import ProfileForm from "@/app/setting/_components/ProfileForm";
import { cookies } from "next/headers";
import { Suspense } from "react";

export const metadata = {
  title: "Hồ sơ người dùng",
};
export default async function Setting() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken").value;
  const clientId = cookieStore.get("clientId").value;

  const { data } = await accountRequestApi.me(accessToken, clientId);

  return (
    <div>
      <div className="">
        <Suspense fallback={<p>Loading weather...</p>}>
          <ProfileForm profile={data} />
        </Suspense>
      </div>
    </div>
  );
}
