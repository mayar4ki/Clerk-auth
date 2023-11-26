/**
 * Description
 * 
 * - check if the given language require RTL or not 
 * 
 */
export const getDir = (lang: string): 'rtl' | 'ltr' => {

    const rtlLangs: string[] = ['ar'];

    return rtlLangs.includes(lang) ? "rtl" : "ltr"
}