export const ChatLog = () => (
  <div>
    {chatLogs.map((item, i) => (
      <div className={userName === item.name ? "balloon_r" : "balloon_l"} key={item.key}>
        {userName === item.name ? getStrTime(item.date) : ""}
        <div className="faceicon">
          <img src={userName === item.name ? "./img/cat.png" : "./img/dog.png"} alt="" />
        </div>
        <div style={{ marginLeft: "3px" }}>
          {item.name}
          <p className="says">{item.msg}</p>
        </div>
        {userName === item.name ? "" : getStrTime(item.date)}
      </div>
    ))}
  </div>
)
