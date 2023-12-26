import { TaskCard } from "./ui/task-card";
export default function Tasks() {
  return (
    <>
      <h1 className="mx-auto mt-4 max-w-max text-3xl font-bold">
        <span className="text-primary-600">Do</span> Things
      </h1>
      <div className=" flex-shrink-1 container mx-auto mt-12 flex w-[90%] flex-wrap justify-center gap-4 sm:w-auto ">
        <TaskCard name="Qr Code Generator" url="/tasks/qr-code-generator">
          Generate Dynamic Qr Codes from any given text.
        </TaskCard>
        <TaskCard name="Url Shortener" url="/tasks/url-shortener">
          Shorten any urls using the is.gd api.
        </TaskCard>
        <TaskCard name="Currency Converter" url="/tasks/exchange-rates">
          Convert any currency to any other currency given any amount.
        </TaskCard>
      </div>
    </>
  );
}
