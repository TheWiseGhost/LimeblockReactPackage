import "./input.css";
import { ChatWidget } from "./components/ChatWidget";
import { FC } from "react";

interface ChatWidgetProps {
  apiKey: string;
  contextParams: any; // Replace with more specific type if possible
}

declare const ChatWidget: FC<ChatWidgetProps>;

export default ChatWidget;
