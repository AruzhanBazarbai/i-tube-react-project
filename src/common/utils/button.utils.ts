export class ButtonUtils {
  public static getButtonSize(size?: string): string {
    switch (size) {
      case "xs":
        return "8px";
      case "s":
        return "8px 12px";
      case "s2":
        return "8px 20px";
      case "sm":
        return "10px 30px";
      case "lg":
        return "18px 28px";
      case "md":
      default:
        return "16px 24px";
    }
  }
}
