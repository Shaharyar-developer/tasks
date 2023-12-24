import { TaskCard } from "./ui/task-card";
export default function Tasks() {
  return (
    <>
      <div className="container mx-auto mt-12 grid w-[90%] gap-4 sm:w-auto sm:grid-cols-4 ">
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
