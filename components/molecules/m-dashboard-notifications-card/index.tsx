/* eslint-disable react/no-danger */
import Image from "@hoc/next-base-image";
import dayjs from "dayjs";
import DefaultAvatar from "@assets/jpg/unisex-avatar.jpg";
import { BsFillRecordFill } from "react-icons/bs";
import useWindowSize, { Size } from "@lib/hooks/useWindowSize";

interface NotificationCardProps {
  subject: string | undefined;
  body: string | undefined;
  date: Date | undefined;
  photoUrl: string | undefined;
  read: boolean | undefined;
}

const NotificationsDetailsCard = ({
  date,
  subject,
  body,
  photoUrl,
  read,
}: NotificationCardProps) => {
  const { width }: Size = useWindowSize();
  const className = read ? "bg-white" : "bg-green-50";
  if (width) {
    if (width < 480) {
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
  }
  return (
    <div
      className={`container grid cursor-pointer grid-cols-8 space-y-1 pt-2 pb-2 shadow-lg ${className}`}
    >
      <div className="static col-span-2 ">
        {read ? (
          ""
        ) : (
          <BsFillRecordFill className="absolute  left-10 mt-4 text-primaryColor" />
        )}
        <div className="ml-25 ">
          <Image
            className="rounded-full"
            src={
              photoUrl
                ? `${process.env.NEXT_PUBLIC_PHOTO_URL}${photoUrl}`
                : DefaultAvatar.src
            }
            layout="fixed"
            height={50}
            width={50}
          />
        </div>
      </div>
      <div className="col-span-5 mt-2">
        <p className="font-bold text-primaryColor">{subject}</p>
        <p dangerouslySetInnerHTML={{ __html: `${body}` }} />
      </div>
      <p className="col-span-1 mt-2">
        {dayjs(new Date(`${date}`)).format("DD-MM-YYYY")}
      </p>
    </div>
  );
};

export default NotificationsDetailsCard;
