import Link from "next/link";
import { Button } from "../../../components/ui/button";
import { Avatar } from "../../../components/ui/avatar";
import Image from "next/image";
import {
  Heart,
  MessageCircleIcon,
  MoreHorizontalIcon,
  SendIcon,
} from "lucide-react";

export default function EducationSection() {
  return (
    <main className="overflow-y-auto w-screen">
      <div className="grid md:grid-cols-3 gap-4 md:gap-2 p-2">
        <div className="bg-[#fafafa] rounded-lg p-2 flex flex-col content-center">
          <div className="flex items-center space-x-2 p-2">
            <div className="flex space-x-2 items-center">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <Image
                  src="https://i.ibb.co/Xj5k31m/killuicon.png"
                  alt="User"
                  className="h-full w-full object-cover"
                  height={32}
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width={32}
                />
              </div>
              <div className="flex flex-col">
                <Link className="font-semibold text-muted-foreground" href="#">
                  victormicco
                </Link>
                <p className="text-xs text-foreground dark:text-background">
                  Victor Micco
                </p>
              </div>
            </div>
            <Button
              className="ronuded-full ml-auto text-muted-foreground"
              size="icon"
              variant={"ghost"}
            >
              <MoreHorizontalIcon className="h-5 w-5" />
              <span className="sr-only">More</span>
            </Button>
          </div>
          <div className="grid gap-2">
            <Image
              alt="Post"
              className="aspect-square object-cover w-96 rounded-t-lg ml-auto mr-auto"
              height={120}
              src={"https://i.ibb.co/Xj5k31m/killuicon.png"}
              width={120}
            />
            <div className="p-2">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Button size={"icon"} variant={"ghost"}>
                    <Heart className="h-6 w-6 text-primary" />
                    <span className="sr-only text-background">Like</span>
                  </Button>
                  <Button size="icon" variant="ghost">
                    <MessageCircleIcon className="h-6 w-6 text-foreground dark:text-background" />
                    <span className="sr-only text-background">Comment</span>
                  </Button>
                  <Button size="icon" variant="ghost">
                    <SendIcon className="h-6 w-6 text-foreground dark:text-background" />
                    <span className="sr-only text-background">Send</span>
                  </Button>
                </div>
                <Button className="ml-auto" size="sm" variant="outline">
                  Follow
                </Button>
              </div>
              <div className="space-y-2">
                <div>
                  <Link
                    className="font-semibold text-foreground dark:text-background"
                    href="#"
                  >
                    victormicco
                  </Link>
                  <span className="ml-4 text-foreground dark:text-background">
                    Hey guys! Check out this amazing project right here.
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <Image
                      alt="User"
                      className="w-full h-full object-cover"
                      height={32}
                      src={"https://i.ibb.co/Xj5k31m/killuicon.png"}
                      style={{
                        aspectRatio: "32/32",
                        objectFit: "cover",
                      }}
                      width={32}
                    />
                  </div>
                  <div className="border p-2 rounded-xl text-sm w-full">
                    <p className="text-foreground dark:text-background">
                      Wow! that incredible!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
