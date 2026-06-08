import { EChartsOption } from 'echarts';
import { MermaidConfig } from 'mermaid';

interface EChartsConfig {
    /**
     * ECharts global options
     *
     * ECharts 全局选项
     */
    option?: EChartsOption;
    /**
     * ECharts setup function
     *
     * ECharts 初始化函数
     */
    setup?: () => Promise<void>;
    /**
     * Whether ECharts has been set up
     *
     * ECharts 是否已初始化
     */
    isSetup?: boolean;
}
declare const defineEChartsConfig: (config: EChartsConfig) => void;

interface MermaidThemeVariables {
    dark?: boolean;
    background?: string;
    textColor?: string;
    lineColor?: string;
    mainBkg?: string;
    errorBkgColor?: string;
    errorTextColor?: string;
    fontFamily?: string;
    titleColor?: string;
    border1?: string;
    border2?: string;
    nodeBorder?: string;
    nodeTextColor?: string;
    primaryColor?: string;
    primaryBorderColor?: string;
    primaryTextColor?: string;
    secondaryColor?: string;
    secondaryBorderColor?: string;
    secondaryTextColor?: string;
    tertiaryColor?: string;
    tertiaryBorderColor?: string;
    tertiaryTextColor?: string;
    personBorder?: string;
    personBkg?: string;
    classText?: string;
    attributeBackgroundColorOdd?: string;
    attributeBackgroundColorEven?: string;
    arrowheadColor?: string;
    clusterBkg?: string;
    clusterBorder?: string;
    edgeLabelBackground?: string;
    excludeBkgColor?: string;
    sectionBkgColor?: string;
    sectionBkgColor2?: string;
    altSectionBkgColor?: string;
    gridColor?: string;
    todayLineColor?: string;
    taskBkgColor?: string;
    taskBorderColor?: string;
    taskTextColor?: string;
    taskTextDarkColor?: string;
    taskTextClickableColor?: string;
    taskTextOutsideColor?: string;
    activeTaskBorderColor?: string;
    activeTaskBkgColor?: string;
    doneTaskBorderColor?: string;
    doneTaskBkgColor?: string;
    critBorderColor?: string;
    critBkgColor?: string;
    git1?: string;
    git2?: string;
    git3?: string;
    git4?: string;
    git5?: string;
    git6?: string;
    git7?: string;
    gitBranchLabel1?: string;
    gitBranchLabel2?: string;
    gitBranchLabel3?: string;
    gitBranchLabel4?: string;
    gitBranchLabel5?: string;
    gitBranchLabel6?: string;
    gitBranchLabel7?: string;
    gitInv1?: string;
    gitInv2?: string;
    gitInv3?: string;
    gitInv4?: string;
    gitInv5?: string;
    gitInv6?: string;
    gitInv7?: string;
    commitLabelBackground?: string;
    commitLabelColor?: string;
    commitLabelFontSize?: string;
    tagLabelBorder?: string;
    tagLabelBackground?: string;
    tagLabelColor?: string;
    tagLabelFontSize?: string;
    fillType0?: string;
    fillType1?: string;
    fillType2?: string;
    fillType3?: string;
    fillType4?: string;
    fillType5?: string;
    fillType6?: string;
    fillType7?: string;
    pie1?: string;
    pie2?: string;
    pie3?: string;
    pie4?: string;
    pie5?: string;
    pie6?: string;
    pie7?: string;
    pie8?: string;
    pie9?: string;
    pie10?: string;
    pie11?: string;
    pie12?: string;
    pieStrokeWidth?: string;
    pieOpacity?: string;
    pieOuterStrokeColor?: string;
    pieOuterStrokeWidth?: string;
    pieTitleTextSize?: string;
    pieTitleTextColor?: string;
    requirementBackground?: string;
    requirementBorderColor?: string;
    requirementBorderSize?: string;
    requirementTextColor?: string;
    relationColor?: string;
    relationLabelBackground?: string;
    relationLabelColor?: string;
    labelColor?: string;
    signalColor?: string;
    signalTextColor?: string;
    labelBoxBorderColor?: string;
    labelBoxBkgColor?: string;
    labelTextColor?: string;
    loopTextColor?: string;
    noteBkgColor?: string;
    noteTextColor?: string;
    noteBorderColor?: string;
    activationBorderColor?: string;
    activationBkgColor?: string;
    sequenceNumberColor?: string;
    actorBorder?: string;
    actorBkg?: string;
    actorTextColor?: string;
    actorLineColor?: string;
    [props: string]: boolean | string | undefined;
}
type MermaidOptions = Omit<MermaidConfig, 'startOnLoad' | 'themeVariables'> & {
    themeVariables?: MermaidThemeVariables | ((isDarkMode: boolean) => MermaidThemeVariables);
};

declare const defineMermaidConfig: (options: MermaidOptions) => void;

export { defineEChartsConfig, defineMermaidConfig };
export type { EChartsConfig };
