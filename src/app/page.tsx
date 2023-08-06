"use client";
import { MEGAMILLIONS_WINNERS } from "@/data/megamillions-winners";
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import { useState } from "react";
import { SectionTitle } from "./components/SectionTitle";
import { FilledButton } from "./components/FilledButton";
import { Ball } from "./components/Ball";
import { Subtitle } from "./components/Subtitle";
import Link from "next/link";
import { Logo } from "./components/Logo";

const MOST_COMMON = {
  Num1: "2",
  Num2: "15",
  Num3: "31",
  Num4: "46",
  Num5: "70",
  PowerNum: "9",
};

export default function Home() {
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date("2022-01-01"),
    endDate: new Date(),
    key: "selection",
  });
  const [randomNumbers, setRandomNumbers] = useState({
    Num1: "",
    Num2: "",
    Num3: "",
    Num4: "",
    Num5: "",
    PowerNum: "",
  });
  const [mostCommon, setMostCommon] = useState({
    Num1: "",
    Num2: "",
    Num3: "",
    Num4: "",
    Num5: "",
    PowerNum: "",
  });

  const chooseRandomNumbers = (): void => {
    const randomIndex = Math.floor(Math.random() * MEGAMILLIONS_WINNERS.length);
    const randomObj = MEGAMILLIONS_WINNERS[randomIndex];
    const randomNumbers: { [key: string]: string } = {};
    randomNumbers.Num1 = randomObj.Num1;
    randomNumbers.Num2 = randomObj.Num2;
    randomNumbers.Num3 = randomObj.Num3;
    randomNumbers.Num4 = randomObj.Num4;
    randomNumbers.Num5 = randomObj.Num5;
    randomNumbers.PowerNum = randomObj.PowerNum;
    setRandomNumbers({
      Num1: randomNumbers.Num1,
      Num2: randomNumbers.Num2,
      Num3: randomNumbers.Num3,
      Num4: randomNumbers.Num4,
      Num5: randomNumbers.Num5,
      PowerNum: randomNumbers.PowerNum,
    });
  };

  const findMostCommonValues = (startDate: Date, endDate: Date): void => {
    const counts: { [key: string]: { [value: string]: number } } = {};
    for (const obj of MEGAMILLIONS_WINNERS) {
      const date = new Date(obj.Date);
      if (date >= startDate && date <= endDate) {
        for (const [key, value] of Object.entries(obj)) {
          if (key === "Date") {
            continue;
          }
          if (!counts[key]) {
            counts[key] = {};
          }
          if (value in counts[key]) {
            counts[key][value]++;
          } else {
            counts[key][value] = 1;
          }
        }
      }
    }

    const most_common: { [key: string]: string } = {};
    for (const [key, value_counts] of Object.entries(counts)) {
      if (key === "Date") {
        continue;
      }
      most_common[key] = Object.keys(value_counts).reduce((a, b) =>
        value_counts[a] > value_counts[b] ? a : b
      );
    }
    setMostCommon({
      Num1: most_common["Num1"],
      Num2: most_common["Num2"],
      Num3: most_common["Num3"],
      Num4: most_common["Num4"],
      Num5: most_common["Num5"],
      PowerNum: most_common["PowerNum"],
    });
  };

  const handleDateSelect = (ranges: RangeKeyDict): void => {
    setSelectionRange({
      startDate: new Date(ranges?.selection?.startDate as Date),
      endDate: new Date(ranges?.selection?.endDate as Date),
      key: "selection",
    });
  };

  return (
    <main className="flex min-h-[100dvh] max-w-5xl mx-auto flex-col items-center pt-10 w-full px-4 z-10">
      <div className="flex flex-col gap-2 justify-center items-center">
        <Logo />
        <div className="flex flex-col max-w-[400px]">
          <div className="text-center text-2xl font-bold text-black dark:text-white md:text-4xl">
            MegaMillions Picker
          </div>
          <Subtitle
            title={
              <div>
                <span>Uses data scraped from </span>
                <Link
                  href="https://www.megamillions.com/Winning-Numbers/Previous-Drawings.aspx"
                  target="_blank"
                  className="underline"
                  rel="noopenner noreferrer"
                >
                  MegaMillions previous winning numbers
                </Link>
                <span> to generate numbers to play in the lottery.</span>
              </div>
            }
          />
        </div>
      </div>
      <div className="flex min-h-screen flex-col items-center w-full gap-8 pt-8">
        <section
          className={`border-stroke gap-4 w-full flex items-center flex-col overflow-hidden rounded-md border bg-white py-4 dark:border-grey dark:bg-black`}
        >
          <div className="flex flex-col max-w-[350px]">
            <SectionTitle title="Most Common Winning Numbers" />
            <Subtitle title="2/2/2010 - 8/4/2023" />
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            {Object.entries(MOST_COMMON).map(([key, value]) => (
              <Ball key={key} value={value} isPowerBall={key === "PowerNum"} />
            ))}
          </div>
        </section>
        <section
          className={`border-stroke gap-4 w-full flex items-center flex-col overflow-hidden rounded-md border bg-white py-4 dark:border-grey dark:bg-black`}
        >
          <div className="flex flex-col max-w-[350px]">
            <SectionTitle title="Number Picker" />
            <Subtitle title="Random Numbers Chosen From Winning Numbers 2/2/2010 - 8/4/2023" />
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            {Object.entries(randomNumbers).map(([key, value]) => (
              <Ball key={key} value={value} isPowerBall={key === "PowerNum"} />
            ))}
          </div>
          <FilledButton text="Get Numbers" onClick={chooseRandomNumbers} />
        </section>
        <section
          className={`border-stroke gap-4 w-full flex items-center flex-col overflow-hidden rounded-md border bg-white py-4 dark:border-grey dark:bg-black`}
        >
          <div className="flex flex-col max-w-[350px]">
            <SectionTitle title="Most Common Within Range" />
            <Subtitle title="Select A Date Range And Get Most Common Winning Numbers" />
          </div>

          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleDateSelect}
            staticRanges={[]}
            minDate={new Date("2/2/2010")}
            maxDate={new Date()}
            direction="horizontal"
            inputRanges={[]}
          />
          <div className="flex items-center gap-2 sm:gap-4">
            {Object.entries(mostCommon).map(([key, value]) => (
              <Ball key={key} value={value} isPowerBall={key === "PowerNum"} />
            ))}
          </div>
          <FilledButton
            text="Get Most Common"
            onClick={() => findMostCommonValues(selectionRange.startDate, selectionRange.endDate)}
          />
        </section>
      </div>
      <footer className="px-4 py-10 flex flex-col">
        <div className="text-center text-sm italic text-grey dark:text-white md:text-md">
          &copy; {new Date().getFullYear()}
        </div>
        <div className="text-center text-sm italic text-grey dark:text-white md:text-md">
          GitHub:{" "}
          <Link
            href={"https://github.com/Ty-Sir/megamillions-picker"}
            target="_blank"
            rel="noopenner noreferrer"
          >
            Ty-Sir
          </Link>
        </div>
        <div className="text-center text-sm italic text-grey dark:text-white md:text-md">
          Disclaimer: For entertainment purposes only. Not responsible for any losses.
        </div>
      </footer>
    </main>
  );
}
