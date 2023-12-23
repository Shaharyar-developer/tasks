import { toast } from "sonner";
/**
 * Displays a toast message with optional action.
 * @param message - The message to be displayed in the toast.
 * @param type - The type of the toast. Can be "success", "error", "warning", "info", or "default". Default is "default".
 * @param action - Optional callback function to be executed when the action is clicked.
 * @param actionLabel - The label for the action button. Default is "Confirm?".
 */
export function triggerToast(
  message: string,
  type: "success" | "error" | "warning" | "info" | "default" = "default",
  action?: () => void,
  actionLabel = "Confirm?",
) {
  if (action) {
    return toast[type === "default" ? "info" : type](message, {
      action: {
        label: actionLabel,
        onClick: () => action(),
      },
    });
  }
  if (type === "default") {
    toast(message);
    return;
  } else {
    toast[type](message);
  }
}
