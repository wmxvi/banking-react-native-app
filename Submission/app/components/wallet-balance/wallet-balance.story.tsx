import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { WalletBalance } from "./wallet-balance"

declare var module

storiesOf("WalletBalance", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary" usage="The primary.">
        <WalletBalance text="WalletBalance" />
      </UseCase>
    </Story>
  ))
