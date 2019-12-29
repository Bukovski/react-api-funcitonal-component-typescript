import React from "react";


export interface IMemeGenerator {
  topText: string,
  bottomText: string,
  randomImg: string,
  handleChange(event: React.ChangeEvent<HTMLInputElement>): void,
  handleSubmit(event: React.FormEvent<HTMLFormElement>): void
}

export interface IMemesCollection {
  id: string,
  name: string,
  url: string,
  width: number,
  height: number,
  box_count: number
}

export interface ILoadIndicator {
  onLoaded(): void,
  onLoadStart(): void,
  onError(): void,
  hasData: boolean,
  children: React.ReactNode
}










