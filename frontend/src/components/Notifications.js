import { useEffect, useState, useCallback } from "react";

const Notifications = () => {
  const [permission, setPermission] = useState(Notification.permission);

  const sendNotification = useCallback(() => {
    if (permission === "granted") {
      new Notification("📖 Time to write in your diary!", {
        body: "Don't forget to record your thoughts today! 📝",
        icon: "/logo192.png",
      });
    }
  }, [permission]);

  useEffect(() => {
    if (permission === "granted") {
      sendNotification();
    }
  }, [permission, sendNotification]); // ✅ Added 'sendNotification' as a dependency

  const requestPermission = () => {
    Notification.requestPermission().then((perm) => setPermission(perm));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {permission !== "granted" && (
        <button onClick={requestPermission} className="notification-btn">
          Enable Daily Reminders
        </button>
      )}
    </div>
  );
};

export default Notifications;
