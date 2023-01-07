/* eslint-disable react/no-danger */
import Image from "@hoc/next-base-image";
import dayjs from "dayjs";
import DefaultAvatar from "@assets/jpg/unisex-avatar.jpg";

import useWindowSize, { Size } from "@lib/hooks/useWindowSize";

interface NotificationCardProps {
  subject: string | undefined;
  body: string;
  date: Date | undefined;
  photoUrl: string | undefined;
  read: boolean | undefined;
}

const NotificationDetailsCard = ({
  date,
  subject,
  body,
  photoUrl,
  read,
}: NotificationCardProps) => {
  const { width }: Size = useWindowSize();
  const className = read ? "bg-white" : "bg-green-50";

  if (width) {
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
      <div
        className={`mb-5 flex max-h-[24rem] w-full  cursor-pointer flex-col space-y-1 rounded-lg  px-4 py-3 drop-shadow-md ${className}`}
      >
        <div className="flex flex-wrap">
          <div className="static w-1/4">
            <Image
              alt="hello"
              className="rounded-full"
              src={
                photoUrl
                  ? `${process.env.NEXT_PUBLIC_PHOTO_URL}${photoUrl}`
                  : DefaultAvatar.src
              }
              height={50}
              width={50}
            />
          </div>
          <div className="w-3/4 space-y-2">
            <p className="font-bold text-primaryColor ">{subject}</p>
            <p
              className="max-h-[15rem] overflow-hidden"
              dangerouslySetInnerHTML={{ __html: `${body}` }}
            />
            <p className="text-sm">
              {dayjs(new Date(`${date}`)).format("DD-MM-YYYY")}
            </p>
          </div>
        </div>
      </div>
    );
  }
  return <div> </div>;
};

export default NotificationDetailsCard;
