"use client";
import { Button, Textarea } from "@nextui-org/react";
import { triggerToast } from "@/libs/utils";
import { useState } from "react";
import { Nav } from "@/components/navbar";
import html2canvas from "html2canvas";
import QRCode from "react-qr-code";
export default function QrCodeGenerator() {
  const [text, setText] = useState("");
  const takeScreenshot = async () => {
    const component = document.getElementById("component");
    if (!component) {
      console.error("Component not found");
      return;
    }
    try {
      const canvas = await html2canvas(component);
      const image = canvas.toDataURL("image/png");
      const blob = await fetch(image).then((res) => res.blob());
      const clipboardItem = new ClipboardItem({ "image/png": blob });
      await navigator.clipboard.write([clipboardItem]);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleSubmit = async () => {
    await takeScreenshot();
    if (text.length !== 0) triggerToast("Copied To Clipboard", "success");
    else triggerToast("Please Enter Some Text", "error");
  };
  return (
    <>
      <Nav />
      <div
        id="component"
        className={`fixed left-1/2 top-2/3 mx-auto aspect-square -translate-x-1/2 -translate-y-1/2 rounded-xl border-b-3 border-r-3 border-default-500 p-2 transition-all ${
          text.length === 0 ? "opacity-0" : "opacity-100"
        }`}
      >
        <QRCode value={text} viewBox={`0 0 256 256`} />
      </div>
      <div className="mx-auto mt-12 flex max-w-max scale-110 flex-col justify-center">
        <Textarea
          className="rounded-t-xl border-2"
          variant="underlined"
          value={text}
          onChange={(e) => setText(e.target.value)}
          label={"Enter text to generate QR code"}
        />
        <Button onClick={handleSubmit} type="submit" className="rounded-t-none">
          Copy to Clipboard
        </Button>
      </div>
    </>
  );
}
