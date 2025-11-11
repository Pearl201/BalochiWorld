//  copyright lexilogos.com


(function() {
    const textarea = document.getElementById("bar");

    const replacements = [
[/’/g, "\'"],
[/a/g, "ا"],
[/اا/g, "آ"],
[/[āâ]/g, "آ"],
[/b/g, "ب"],
[/ب'/g, "پ"],
[/p/g, "پ"],
[/پ'/g, "ب"],
[/t/g, "ت"],
[/ت'/g, "ث"],
[/ث'/g, "ٿ"],
[/ٿ'/g, "ت"],
[/تت/g, "ٹ"],
[/ṭ/g, "ٹ"],
[/j/g, "ج"],
[/c/g, "چ"],
[/ج'/g, "چ"],
[/چ'/g, "ح"],
[/H/g, "ح"],
[/ح'/g, "خ"],
[/x/g, "خ"],
[/K/g, "خ"],
[/خ'/g, "ج"],
[/d/g, "د"],
[/د'/g, "ذ"],
[/ذ'/g, "ڐ"],
[/ڐ'/g, "د"],
[/دد/g, "ڈ"], 
[/R/g, "ڈ"],
[/ḍ/g, "ڈ"],
[/r/g, "ر"],
[/z/g, "ز"],
[/ر'/g, "ز"],
[/ز'/g, "ژ"],
[/ژ'/g, "ڙ"],
[/ڙ'/g, "ر"],
[/رر/g, "ڑ"],
[/ṛ/g, "ڑ"],
[/s/g, "س"],
[/س'/g, "ش"],
[/ش'/g, "س"],
[/S/g, "ص"],
[/ص'/g, "ض"],
[/ض'/g, "ص"],
[/D/g, "ض"],
[/T/g, "ط"],
[/ط'/g, "ظ"],
[/[ZŻż]/g, "ظ"],
[/ظ'/g, "ط"],
[/G/g, "ع"],
[/ع'/g, "غ"],
[/ğ/g, "غ"],
[/غ'/g, "ع"],
[/f/g, "ف"],
[/q/g, "ق"],
[/k/g, "ک"],
[/ک'/g, "گ"],
[/g/g, "گ"],
[/گ'/g, "ک"],
[/l/g, "ل"],
[/m/g, "م"],
[/n/g, "ن"],
[/[NṄṅ]/g, "ں"],
[/ں'/g, "ن"],
[/ن'/g, "ں"],
[/h/g, "ہ"],
[/ہ'/g, "ھ"],
[/ھ'/g, "ہ"],
[/e/g, "ے"],
[/[uūovw]/g, "و"],
[/[yiī]/g, "ی"],
[/ی'/g, "ي"],
[/-/g, "ء"],
[/یءء/g, "ئ"],
[/\?/g, "؟"],
[/;/g, "؛"],
[/,/g, "،"],
[/0/g, "۰"],
[/1/g, "۱"],
[/2/g, "۲"],
[/3/g, "۳"],
[/4/g, "۴"],
[/5/g, "۵"],
[/6/g, "۶"],
[/7/g, "۷"],
[/8/g, "۸"],
[/9/g, "۹"],
[/\//g, "\u200c"],

[/&&/g, "ّ"],
[/&ا/g, "َ"],
[/&و/g, "ُ"],
[/&ی/g, "ِ"],

[/श/g, "ش"],
[/स/g, "س"],
[/झ़/g, "ژ"],
[/ज़/g, "ز"],
[/ड़/g, "ڑ"],
[/र/g, "ر"],
[/ज़ /g, "ذ"],
[/ड/g, "ڈ"],
[/द/g, "د"],
[/ख़/g, "خ"],
[/ह/g, "ح"],
[/च/g, "چ"],
[/ज/g, "ج"],
[/स/g, "ث"],
[/ट/g, "ٹ"],
[/त/g, "ت"],
[/प/g, "پ"],
[/ब/g, "ب"],
[/आ/g, "آ"],
[/ए/g, "ے"],
[/य/g, "ی"],
[/ह/g, "ہ"],
[/व/g, "و"],
[/ङ/g, "ں"],
[/न/g, "ن"],
[/म/g, "م"],
[/ल/g, "ل"],
[/ग/g, "گ"],
[/क/g, "ک"],
[/क़/g, "ق"],
[/फ़/g, "ف"],
[/ग़/g, "غ"],
[/ज़/g, "ظ"],
[/त/g, "ط"],
[/ज़/g, "ض"],
[/स/g, "ص"],


];

    const transform = (txt) => {
        let result = txt;
        for (const [regex, replacement] of replacements) {
            result = result.replace(regex, replacement);
        }
        return result;
    };

    textarea.addEventListener("input", (e) => {
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const scrollTop = textarea.scrollTop;

        const originalText = textarea.value;

        if (start === 0 && end === originalText.length) {
            textarea.value = transform(originalText);
            textarea.selectionStart = 0;
            textarea.selectionEnd = textarea.value.length;
        }
        else {
            textarea.value = transform(originalText);

            let beforeCursorOriginal = originalText.substring(0, start);
            beforeCursorOriginal = transform(beforeCursorOriginal);
            textarea.selectionStart = textarea.selectionEnd = beforeCursorOriginal.length;
        }

        textarea.scrollTop = scrollTop;
    });


    textarea.addEventListener("keydown", (e) => {
        if (e.ctrlKey || e.metaKey) {
            return;
        }
    });

})();