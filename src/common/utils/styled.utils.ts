import { Colors, FontSize, FontWeight, LineHeight } from "../dictionaries";
import { TextAttributes } from "../types";

export class StyledUtils {
  private static getFontFamilyByWeight(fontWeight: number): string {
    switch (fontWeight) {
      case 400:
      case 500:
        return "InterMedium";
      case 600:
        return "InterSemiBold";
      case 700:
        return "InterBold";
      default:
        return "InterRegular";
    }
  }

  public static createTextTemplate({
    fontWeight = FontWeight.Regular,
    fontSize = FontSize.Default,
    lineHeight = LineHeight.Default,
    color = Colors.text.primary,
    hoverColor = color ?? Colors.text.primary,
  }: TextAttributes): string {
    return `
        margin: 0;
        padding: 0;
        font-family: ${this.getFontFamilyByWeight(fontWeight)};
        font-weight: ${fontWeight};
        font-size: ${fontSize};
        line-height: ${lineHeight};
        color: ${color};
        &:hover{
            color: ${hoverColor};
        }
        `;
  }
}
