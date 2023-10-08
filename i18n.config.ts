export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: {
      home: {
        banner: {
          title: "Together we will grow on target",
          subtitle: "\"Through your ideas\"",
          button: "Let's use your ideas!",
        },
        features: [
          "Advice",
          "Suggest",
          "Plan",
          "Consult",
          "Community",
          "Growth",
        ],
        pro: {
          title: "Why use URGROWTH?",
          subtitle: "\"Because we'll grow better together, through your ideas\"",
          pros: [
            {
              title: "Supportive Community",
              subtitle:
                "Like-minded people, who have work experiences in various fields, are ready to help you.",
            },
            {
              title: "Consult from Experts",
              subtitle:
                "Consult and Plan with experts who have lots of experiences.",
            },
            {
              title: "Variety of Services",
              subtitle:
                "We provide a variety of services to help you improve your skills.",
            },
          ],
        },
      },
    },
    th: {
      home: {
        banner: {
          title: "พวกเราจะเติบโตตามเป้าหมายด้วยกัน",
          subtitle: "\"ผ่านไอเดียของคุณ\"",
          button: "ไปใช้ไอเดียของคุณกัน!",
        },
        features: ["แนะนำ", "เรียนรู้", "วางแผน", "ปรึกษา", "ชุมชน", "เติบโต"],
        pro: {
          title: "ทำไมต้องใช้ URGROWTH?",
          subtitle: "\"เพราะพวกเราจะเติบโตตามเป้าหมายด้วยกัน ผ่านไอเดียของคุณ\"",
          pros: [
            {
              title: "ชุมชนคุณภาพ",
              subtitle:
                "ชุมชนที่มีความคิดที่เหมือนคุณ และมีประสบการณ์ตรงในการทำงาน",
            },
            {
              title: "ปรึกษาจากผู้เชี่ยวชาญ",
              subtitle: "ปรึกษาและวางแผน จากผู้เชี่ยวชาญมากประสบการณ์โดยตรง",
            },
            {
              title: "บริการที่หลากหลาย",
              subtitle: "มีบริการหลากหลายให้เลือกใช้ เพื่อพัฒนาศักยภาพของคุณ",
            },
          ],
        },
      },
    },
  },
}));
