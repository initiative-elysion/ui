export interface IFonts {
    untitled: string
    mono: string
    sizes: {
        1: string
        2: string
        3: string
        4: string
        5: string
        6: string
        7: string
        8: string
        9: string        
    }
}

const fonts: IFonts = {
    untitled: 'Untitled Sans, -apple-system, system-ui, sans-serif',
    mono: 'Söhne Mono, menlo, monospace',
    sizes: {
        1: '11px',
        2: '12px',
        3: '15px',
        4: '17px',
        5: '20px',
        6: '22px',
        7: '28px',
        8: '36px',
        9: '60px',
    }  
}

export default fonts