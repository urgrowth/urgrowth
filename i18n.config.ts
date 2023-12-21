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
          "Learning",
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
        about: {
          title: "What is URGROWTH?",
          description: "We are dedicated to encouraging the youths through our website to set out on a journey of self-discovery and self-empowerment. We genuinely think that every person has a distinct identity that is just waiting to be revealed, and we want you to proudly embrace it. Our goal is to assist you in realizing your full potential and utilizing your skills and assets so that you can have a positive influence on society. Our services are intended to lead you down this transforming path and help you become your greatest self, whether you are a student, a young adult, or anybody else that is seeking personal growth and development. Join us in this inspiring endeavor, and let society and yourself benefit from your true identity shining."
        }
      },
      learning: {
        title: "Learning",
        progress: "My Progress",
        steps: [
          "Find your dream",
          "Prioritize your dream",
          "Setting goals",
          "Weakness & Strength",
          "Develop & Manage",
        ]
      },
      modal: {
        end: {
          close: "Close",
          finish: "Finish",
          next: "Next",
          previous: "Previous",
          back: "Back",
          ok: "OK",
        },
        title: {
          error: "Error",
          success: "Success",
        },
      },
      user: {
        accomplishment: [
          {
            title: "The First Step",
            description: "The dream begins with you, you are the key to unlock your dream!",
            unlock: "Created a URGROWTH profile",
          },
        ],
        update: {
          handle: {
            required: "Handle must not be empty",
            maxLength: "Handle must be less than 32 characters",
            minLength: "Handle must be more than 3 characters",
            pattern: "Handle must contains alphanumerics and underscore only",
            taken: "Handle is already taken",
          },
          fullName: {
            required: "Full name must not be empty",
            maxLength: "Full name must be less than 64 characters",
          },
          bio: {
            maxLength: "Bio must be less than 256 characters",
          },
          interests: {
            maxLength: "Interests must not exceed 5 items",
          },
          skills: {
            maxLength: "Skills must not exceed 5 items",
          },
          introduction: {
            maxLength: "Introduction must be less than 2048 characters",
          },
          success: "Profile updated successfully!",
        },
        edit: {
          charLeft: "characters left",
          tagsLeft: "tags left",
          save: "Save",
          cancel: "Cancel",
        },
        profile: {
          accomplishment: "Accomplishment",
          notFound: "🤔 Hmm, we can't find this user. Are you sure you typed the correct handle?",
          edit: "Edit Profile",
          logout: "Logout",
          fullName: "Full Name",
          location: "Location",
          handle: "Handle (username)",
          connections: "Connections",
          interests: {
            title: "Interests",
            empty: "No interests added yet... 😭",
          },
          skills: {
            title: "Skills",
            empty: "No skills added yet... 😭",
          },
          bio: {
            title: "Biography",
            empty: "🤔 We don't know about them... but we think they're a nice person",
          },
          introduction: {
            title: "Introduction",
            empty: "🤔 We don't know about them... but we think they have a big dream",
          },
        },
      },
      footer: {
        notice: "© 2023 URGROWTH — All rights reserved",
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
        about: {
          title: "ยัวร์โกรว์ธคืออะไร?",
          description: "เรามุ่งมั่นที่จะกระตุ้นให้กับเยาวชนผ่านเว็บไซต์ของเราเพื่อเริ่มต้นการผจญภัยในการค้นพบตนเองและการเสริมพลังตนเอง ทีมของเราเชื่ออย่างจริงจังว่าทุกคนมีเอกลักษณ์ที่เฉพาะตัวที่กำลังรอให้เปิดเผย และเราต้องการให้คุณยิ่งกว่าที่จะยอมรับมันอย่างภูมิใจ จุดมุ่งหมายของเราคือการช่วยเสริมสร้างความสามารถที่เต็มเปี่ยมของคุณและให้คุณใช้ทักษะและทรัพยากรของคุณอย่างเต็มที่เพื่อที่คุณจะสามารถมีอิทธิพลที่เชิดชูบนสังคม บริการของเราถูกออกแบบมาเพื่อนำคุณไปยังทางที่เปลี่ยนแปลงนี้และช่วยให้คุณกลายเป็นตัวของคุณเองที่ยอดเยี่ยมที่สุด ไม่ว่าคุณจะเป็นนักเรียน ผู้ใหญ่เยาวชนหรือใครก็ตามที่กำลังมองหาการเติบโตและพัฒนาตนเอง ร่วมรับส่วนร่วมในโครงการที่สร้างก๊าซบริสุทธิ์นี้กับเราและให้สังคมและตนเองได้รับประโยชน์จากเอกลักษณ์ที่แท้จริงของคุณที่ส่องแสงอยู่"
        }
      },
      learning: {
        title: "การเรียนรู้",
        progress: "ความคืบหน้า",
        steps: [
          "หาความฝัน",
          "จัดลำดับความฝัน",
          "ตั้งเป้าหมาย",
          "หาจุดอ่อนและจุดแข็ง",
          "กำจัดและเสริมสร้าง",
        ]
      },
      modal: {
        end: {
          close: "ปิด",
          finish: "เสร็จสิ้น",
          next: "ถัดไป",
          previous: "ก่อนหน้า",
          back: "ย้อนกลับ",
          ok: "ตกลง",
        },
        title: {
          error: "เกิดข้อผิดพลาด",
          success: "สำเร็จ",
        },
      },
      user: {
        accomplishment: [
          {
            title: "ก้าวแรกสู่ความสำเร็จ",
            description: "ความสำเร็จเริ่มต้นด้วยตัวคุณเอง คุณคือผู้กำหนดอนาคตของคุณ!",
            unlock: "สร้างโพรไฟล์ URGROWTH",
          },
        ],
        update: {
          handle: {
            required: "ชื่อผู้ใช้ต้องไม่ว่างเปล่า",
            maxLength: "ชื่อผู้ใช้ต้องไม่เกิน 32 ตัวอักษร",
            minLength: "ชื่อผู้ใช้ต้องมีมากกว่า 3 ตัวอักษร",
            pattern: "ชื่อผู้ใช้ต้องประกอบด้วยตัวอักษรภาษาอังกฤษ ตัวเลข และขีดล่างเท่านั้น",
            taken: "ชื่อผู้ใช้นี้ถูกใช้ไปแล้ว",
          },
          fullName: {
            required: "ชื่อโพรไฟล์ต้องไม่ว่างเปล่า",
            maxLength: "ชื่อโพรไฟล์ต้องไม่เกิน 64 ตัวอักษร",
          },
          bio: {
            maxLength: "ชีวประวัติต้องไม่เกิน 256 ตัวอักษร",
          },
          interests: {
            maxLength: "ความสนใจต้องไม่เกิน 5 รายการ",
          },
          skills: {
            maxLength: "ทักษะต้องไม่เกิน 5 รายการ",
          },
          introduction: {
            maxLength: "แนะนำตัวต้องไม่เกิน 2048 ตัวอักษร",
          },
          success: "อัพเดทโพรไฟล์สำเร็จ!",
        },
        edit: {
          charLeft: "ตัวอักษรที่เหลือ",
          tagsLeft: "ชนิดที่เหลือ",
          save: "บันทึก",
          cancel: "ยกเลิก",
        },
        profile: {
          accomplishment: "ความสำเร็จ",
          notFound: "🤔 อ๊ะ พวกเราไม่พบผู้ใช้นี้ แน่ใจไหมว่าคุณพิมพ์แฮนเดิล (ชื่อผู้ใช้) ที่ถูกต้อง?",
          edit: "แก้ไขโพรไฟล์",
          logout: "ออกจากระบบ",
          fullName: "ชื่อโพรไฟล์",
          location: "ที่อยู่",
          handle: "แฮนเดิล (ชื่อผู้ใช้)",
          connections: "ความเกี่ยวข้อง",
          interests: {
            title: "ความสนใจ",
            empty: "ผู้ใช้ยังไม่ได้เพิ่มความสนใจ... 😭",
          },
          skills: {
            title: "ทักษะ",
            empty: "ผู้ใช้ยังไม่ได้เพิ่มทักษะ... 😭",
          },
          bio: {
            title: "ชีวประวัติ",
            empty: "🤔 เราไม่รู้เกี่ยวกับเขา... แต่คิดว่าเขาคงเป็นคนดี",
          },
          introduction: {
            title: "แนะนำตัว",
            empty: "🤔 เราไม่รู้เกี่ยวกับเขา... แต่เขาคงมีความฝันอันยิ่งใหญ่",
          },
        },
      },
      footer: {
        notice: "© 2023 URGROWTH — สงวนลิขสิทธิ์ทุกประการ",
      },
    },
  },
}));
