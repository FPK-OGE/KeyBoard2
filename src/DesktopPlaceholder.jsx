export default function DesktopPlaceholder() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      flexDirection: "column",
      padding: "1rem",
      textAlign: "center",
      fontSize: "1.2rem"
    }}>
      <p>Данное приложение доступно только на мобильных устройствах.</p>
    </div>
  )
}
