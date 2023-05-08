"use client";

import { CheckCircleIcon, ExclamationIcon } from "@heroicons/react/solid";
import { Callout } from "@tremor/react";
import React from "react";

type Props = {
  message: string;
  warning?: boolean;
};

const CallOutCard = ({ message, warning }: Props) => {
  return (
    <div>
      <Callout
        title={message}
        icon={warning ? ExclamationIcon : CheckCircleIcon}
        color={warning ? "rose" : "teal"}
      />
    </div>
  );
};

export default CallOutCard;
