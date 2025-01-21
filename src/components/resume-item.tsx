import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";

interface Props {
  title: string;
  subtitle: string;
  period: string;
  logoURL: string;
  altText: string;
};

export function ResumeItem({ title, period, subtitle, logoURL, altText }: Props) {
  return (
    <div className="pb-4 flex flex-row w-full justify-start items-center gap-4">
        <Avatar className="m-auto size-12">
          <AvatarImage src={logoURL} alt={altText} className="object-contain" />
          <AvatarFallback>{title[0]}</AvatarFallback>
        </Avatar>
      <div className="flex flex-1 flex-col justify-start gap-1">
        {period && <time className="dark:text-zinc-300 text-zinc-700 text-xs">{period}</time>}
        <h2 className="font-semibold leading-none">{title}</h2>
        {subtitle && <p className="dark:text-zinc-300 text-zinc-700 text-sm">{subtitle}</p>}
      </div>
    </div>
  );
}
