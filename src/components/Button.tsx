import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "tertiary";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium transition-opacity hover:opacity-90 whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary: "bg-[#051A24] text-white btn-primary-shadow",
  secondary: "bg-white text-[#051A24] btn-secondary-shadow",
  tertiary: "bg-white text-[#051A24] btn-primary-shadow btn-secondary-shadow",
};

type CommonProps = { variant?: Variant; className?: string; children: React.ReactNode };

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type AnchorProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps | AnchorProps>(
  ({ variant = "primary", className = "", children, ...props }, ref) => {
    const cls = `${base} ${variants[variant]} ${className}`;
    if ("href" in props && props.href) {
      return (
        <a ref={ref as React.Ref<HTMLAnchorElement>} className={cls} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
          {children}
        </a>
      );
    }
    return (
      <button ref={ref as React.Ref<HTMLButtonElement>} className={cls} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
