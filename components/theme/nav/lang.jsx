import Link from "next/link";
 

const Lang = () => {
  return (
    <div className="box">
      <button className="box p-2" onClick={change}>
        <img
          src="/images/lang-ar.png"
          alt="arabic lang"
          id="imageLang"
          className="max-w-min	"
          width={40}
          height={40}
        />
      </button>
    </div>
  );
};
export function change() {
    let html = document.querySelector('html')
    let lang = html.getAttribute('lang')
    let body = document.body
    const set = (lang, dir, imageUrl) => {
        html.setAttribute('lang', lang)
        body.dir = dir
        document.querySelector('#imageLang').src = `/images/lang-${lang}.png`
    }
    if (lang == 'ar') set('en', 'ltr')
    else set('ar', 'rtl')
} 
export default Lang;
