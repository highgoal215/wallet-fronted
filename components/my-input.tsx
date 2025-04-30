import { Input } from "@heroui/input";
import { extendVariants } from "@heroui/system";

const MyInput = extendVariants(Input, {
  variants: {
    color: {
      primary: {
        inputWrapper:
          "bg-white text-black border border-foreground group-data-[hover=true]:bg-white/5 group-data-[focus=true]:bg-white/5 border border-stroke px-[12px] py-[15px] h-[50px]",
        input: "text-black placeholder:text-gray-400",
      },
    },
    isInvalid: {
      true: {
        inputWrapper: "border-danger !bg-foreground",
      },
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

export default MyInput;
