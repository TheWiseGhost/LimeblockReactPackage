import React from "react";

export interface ChatWidgetProps {
  apiKey: string;
  contextParams: {
    board_id: string;
    user_id: string;
  };
}

declare const ChatWidget: React.FC<ChatWidgetProps>;

export default ChatWidget;
