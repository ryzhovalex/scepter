export interface SectionHeader
{
  title: string;
  sections: Section[];
}

/**
 * @abstract
 */
export interface Section
{
  title: string;
  emoji: string;
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

/**
 * Renders route directly without panels.
 */
export interface SimpleSection extends Section
{
  route: string;
}

export interface PanelHeader
{
  title: string;
  emoji: string;
  panels: Panel[];
}

export interface Panel
{
  title: string;
  emoji?: string;
  route: string;
}
