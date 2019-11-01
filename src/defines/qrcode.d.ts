declare function qrcode(): string

declare namespace qrcode {
  const toDataURL: (text: string) => Promise<string>
}

export = qrcode
