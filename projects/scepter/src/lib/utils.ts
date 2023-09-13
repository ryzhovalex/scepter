import { SimpleSection } from "./content";

export abstract class ContentTypeUtils
{
  public static isSimpleSection(section: object): section is SimpleSection
  {
    return Object.hasOwn(section, "route");
  }

  public static isPaneledSection(section: object): section is SimpleSection
  {
    return (
      Object.hasOwn(section, "homePanel")
      && Object.hasOwn(section, "panels")
      && Object.hasOwn(section, "headers")
    );
  }
}
