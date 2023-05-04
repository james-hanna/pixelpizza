export function HoverEffectColor(effect, message) {
  const clss = `text-slate-700 ${effect} !important`;
  const messageWithEffect = message.split("").map((char, index) => (
    <span key={index} className={clss}>
      {char}
    </span>
  ));
  return messageWithEffect;
}
