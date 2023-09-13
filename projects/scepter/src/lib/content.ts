/**
 * Content injected into Scepter dashboard.
 */
export interface ScepterContent
{
  title?: string;
  logoURL?: string;

  /**
   * Default view to be rendered automatically.
   *
   * Should be present among any section/panel inside given content since it
   * will be searched to select an appropriate panel.
   */
  defaultRoute: string;

  headers: SectionHeader[];
}

export interface SectionHeader
{
  title: string;
  sections: (SimpleSection | PaneledSection)[];
}

/**
 * @abstract
 */
export interface Section
{
  title: string;
  iconURL: string;
}

/**
 * Renders route directly without panels.
 */
export interface SimpleSection extends Section
{
  route: string;
}

/**
 * Renders panels which in turn render routes.
 */
export interface PaneledSection extends Section
{
  homePanel: Panel;
  panels: Panel[];
  headers: PanelHeader[];
}

export interface PanelHeader
{
  title: string;
  iconURL: string;
  panels: Panel[];
}

export interface Panel
{
  title: string;
  iconURL?: string;
  route: string;
}
