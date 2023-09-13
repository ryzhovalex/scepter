export interface ScepterConfig
{
  /**
   * Where titled logo button should lead to.
   *
   * Defaults to default route.
   */
  titledLogoButtonDestination?: string | null | undefined;

  /**
   * Default view to be rendered automatically.
   *
   * Should be present among any section/panel inside given content since it
   * will be searched to select an appropriate panel.
   *
   * Defaults to first available route found.
   */
  defaultRoute?: string | undefined;
}
