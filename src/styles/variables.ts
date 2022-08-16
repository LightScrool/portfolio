// ATTENTION!
// If you want to change this file, do not forget to make the same changes in variables.scss file

export const FONTS = {
    main: "Montserrat, sans-serif"
}

export const FONT_WEIGHTS = {
    regular: 400,
    medium: 500,
    semi: 600,
    bold: 700,
    extra: 800,
}

export const SIZES = {
    header: "6rem",
    containerWidth: "1200px"
}

export const COLORS = {
    black: "#333",
    lightBlack: "#3D3D3D",
    red: "#FE654F",
    blue: "#4AD8F8",
    yellow: "#FAF33E",
    darkWhite: "#F7F7F7",
    green: "#4FFE65"
}

export const PATTERNS = {
    gradientRed: "linear-gradient(242.56deg, #FF715E 12.86%, #FF4646 87.14%)",
    gradientBlack: `linear-gradient(242.56deg, ${COLORS.lightBlack} 12.86%, ${COLORS.black} 87.14%)`,
    shadowPicture: "drop-shadow(-10px 10px 40px rgba(0, 0, 0, 0.2))",
    shadowBlock: "0 5px 10px rgba(0, 0, 0, 0.15)",
}

export const TIMING = {
    fast: 100,
    standard: 300,
    slow: 1200
}

export const MEDIA_QUERIES = {
    portrait: "(orientation: portrait)",
    landscape: "(orientation: landscape)",
    halfSiteSection: "(prefers-reduced-motion: no-preference) and (hover: hover) and (max-width: 1120px) and (min-width: 920.1px) and (min-height: 630.1px), " +
        "(prefers-reduced-motion: no-preference) and (hover: hover) and (max-height: 820px) and (min-width: 920.1px) and (min-height: 630.1px)",
    disableSiteSectionAnimation: "(prefers-reduced-motion: reduce), (hover: none), (max-width: 920px), (max-height: 630px)",
    hideIntroOuter: "(max-width: 1400px)",
    container: "(max-width: 1200px)",
    verticalGrid: "(max-width: 1000px)",
    fsz14: "(max-width: 900px)",
    fsz13: "(max-width: 820px)",
    fsz12: "(max-width: 720px)",
    remakeSiteSection: "(max-width: 680px)",
    remakeHeader: "(max-width: 650px)",
}