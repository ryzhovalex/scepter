/**
 * Content injected into Scepter dashboard.
 */
export interface ScepterContent
{
  title?: string;
  logoURL?: string;
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
