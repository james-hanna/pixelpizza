export function HoverEffectColor(effects, message) {
  const clss = `text-slate-700 ${effects} !important`;
  const messageWithEffect = message.split("").map((char, index) => (
    <span key={index} className={clss}>
      {char}
    </span>
  ));
  return messageWithEffect;
}
