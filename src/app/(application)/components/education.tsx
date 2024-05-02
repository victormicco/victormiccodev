import unicid from "../../../img/unicid.png";
import etec from "../../../img/etec.png";
import senai from "../../../img/senai.png";
import oracle from "../../../img/oracle.png";

import Image from "next/image";

export default function EducationSection() {
  return (
    <>
      <section className="w-full py-12 " id="education">
        <div className="container grid items-center gap-8 px-4 text-center md:gap-16 md:px-6">
          <div>
            <h3 className="text-lg font-semibold tracking-wider md:text-base sh-3.5">
              What you think about know a bit about my
            </h3>
            <p className="mt-3 text-2xl font-extrabold leading-none md:text-3xl sh-2.5">
              Education
            </p>
            <p className="mt-3 text-gray-500 md:mx-auto md:max-w-3xl md:text-base sh-2.25">
              Let me show my past education and what I have learned from there.
            </p>
          </div>
          <div className="grid max-w-sm gap-4 mx-auto md:gap-8 lg:max-w-none lg:grid-cols-2 xl:gap-12">
            <div className="flex items-center gap-4">
              <Image
                alt="Service 1"
                className="rounded-lg"
                height="120"
                src={unicid}
                style={{
                  aspectRatio: "120/120",
                  objectFit: "cover",
                }}
                width="120"
              />
              <div>
                <h4 className="text-xl font-semibold sh-1.5">
                  Analysis and Systems Development
                </h4>
                <p className="text-sm text-gray-500 sh-2.25">
                  UNICID | College | 2024 - 2026
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image
                alt="Service 2"
                className="rounded-lg"
                height="120"
                src={etec}
                style={{
                  aspectRatio: "120/120",
                  objectFit: "cover",
                }}
                width="120"
              />
              <div>
                <h4 className="text-xl font-semibold sh-1.5">
                  Software Development
                </h4>
                <p className="text-sm text-gray-500 sh-2.25">
                  ETEC Parque Belém | Technical Course | 2020 - 2023
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image
                alt="Service 3"
                className="rounded-lg"
                height="120"
                src={senai}
                style={{
                  aspectRatio: "120/120",
                  objectFit: "cover",
                }}
                width="120"
              />
              <div>
                <h4 className="text-xl font-semibold sh-1.5">Mechatronics</h4>
                <p className="text-sm text-gray-500 sh-2.25">
                  SENAI Anchieta | Technical Course | Dropout
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image
                alt="Service 4"
                className="rounded-lg"
                height="120"
                src={oracle}
                style={{
                  aspectRatio: "120/120",
                  objectFit: "cover",
                }}
                width="120"
              />
              <div>
                <h4 className="text-xl font-semibold sh-1.5">
                  Bootcamp Oracle One
                </h4>
                <p className="text-sm text-gray-500 sh-2.25">
                  Oracle - Alura - Ifood | Bootcamp | Present
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
