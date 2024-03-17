import { CardHeader, CardContent, Card } from "@/components/ui/card";
import {
  Linkedin,
  MailboxIcon,
  MapIcon,
  Phone,
  RadioReceiverIcon,
} from "lucide-react";

export default function ContactMe() {
  return (
    <div className="w-full flex justify-center " id="contact">
      <Card className=" w-3/3 m-8 lg:w-1/3 md:w-1/3">
        <CardHeader>
          <div>Contact me</div>
          <div>All of my contact information</div>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex items-center space-x-4">
            <Phone className="h-4 w-4" />
            <div className="text-sm font-medium">+55 (11) 99101-2250</div>
          </div>
          <div className="flex items-center space-x-4">
            <MailboxIcon className="h-4 w-4" />
            <div className="text-sm font-medium">
              victor.oficial093@gmail.com
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Linkedin className="h-4 w-4 mt-0.5" />
            <div className="text-sm font-medium">
              <a href="https://linkedin/in/victormicco">victormicco</a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
