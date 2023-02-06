import Image from "next/image"

export const ChatLog = ({ data, date }) => (
  <div>
    {data.map((item, i) => (
      <div className={userName === item.name ? "balloon_r" : "balloon_l"} key={item.key}>
        {userName === item.name ? date(item.date) : ""}
        <div className="faceicon">
          <Image src={"/images/キャラ2-森のあの人.jpg"} alt="アイコン" />
        </div>
        <div style={{ marginLeft: "3px" }}>
          {item.name}
          <p className="says">{item.msg}</p>
        </div>
        {userName === item.name ? "" : date(item.date)}
      </div>
    ))}
  </div>
)
