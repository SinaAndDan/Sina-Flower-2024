import axios from "axios";

const translateToPersian = async (text: string) => {
  try {
    const response = await axios.post(
      "https://translation.googleapis.com/language/translate/v2", // Google Translate API URL
      {
        q: text,
        target: "fa", // 'fa' is the language code for Persian
        key: process.env.GOOGLE_API_KEY, // Add your Google Translate API key here
      }
    );
    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error("Error translating text:", error);
    return "Translation failed";
  }
};

export async function getWikipediaSummary(
  productName_en: string,
  productName_pe: string
) {
  try {
    const englishResponse = await axios.get(
      "https://en.wikipedia.org/w/api.php",
      {
        params: {
          action: "query",
          format: "json",
          prop: "extracts",
          titles: productName_en,
          exintro: true,
          explaintext: true,
          redirects: 1,
          origin: "*",
        },
      }
    );

    const persianResponse = await axios.get(
      "https://fa.wikipedia.org/w/api.php",
      {
        params: {
          action: "query",
          format: "json",
          prop: "extracts",
          titles: productName_pe,
          exintro: true,
          explaintext: true,
          redirects: 1,
          origin: "*",
        },
      }
    );

    const englishPages = englishResponse.data.query.pages;
    const englishPageId = Object.keys(englishPages)[0];
    const englishSummary =
      englishPageId && englishPages[englishPageId]?.extract
        ? englishPages[englishPageId].extract
        : "No summary found in English.";

    const persianPages = persianResponse.data.query.pages;
    const persianPageId = Object.keys(persianPages)[0];
    const persianSummary =
      persianPageId && persianPages[persianPageId]?.extract
        ? persianPages[persianPageId].extract
        : "درباره محصول توضیحات فارسی پیدا نشد";

    return {
      english: englishSummary,
      persian: persianSummary,
    };
  } catch (error) {
    console.error("Error fetching Wikipedia data:", error);
    return {
      english: "Error fetching English summary.",
      persian: "Error fetching Persian summary.",
    };
  }
}
