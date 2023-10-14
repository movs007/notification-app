"use client";

import { useState } from "react";

interface Notification {
  id: string;
  author: {
    name: string;
    src: string;
    href: string;
  };
  text: string;
  link?: {
    text: string;
    href: string;
  };
  image?: {
    src: string;
    alt: string;
    href: string;
  };
  time: string;
  privateMessage?: string;
  isUnread: boolean;
}

const Notification = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      author: {
        name: "Mark Webber",
        src: "images/avatar-mark-webber.webp",
        href: "#",
      },
      text: "reacted to your recent post",
      link: {
        text: "My first tournament today",
        href: "#",
      },
      time: "1m ago",
      isUnread: true,
    },
    {
      id: "2",
      author: {
        name: "Angela Gray ",
        src: "images/avatar-angela-gray.webp",
        href: "#",
      },
      text: "followed you",
      time: "5m ago",
      isUnread: true,
    },
    {
      id: "3",
      author: {
        name: "Jacob Thompson",
        src: "images/avatar-jacob-thompson.webp",
        href: "#",
      },
      text: "has joined your group",
      link: {
        text: "Chess Club",
        href: "#",
      },
      time: "1 day ago",
      isUnread: true,
    },
    {
      id: "4",
      author: {
        name: "Rizky Hasanuddin",
        src: "images/avatar-rizky-hasanuddin.webp",
        href: "#",
      },
      text: "sent you a private message",
      time: "5 days ago",
      privateMessage:
        "Hello thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      isUnread: false,
    },
    {
      id: "5",
      author: {
        name: "Kimberly Smith",
        src: "images/avatar-kimberly-smith.webp",
        href: "#",
      },
      text: "commented on your picture ",
      image: {
        src: "images/image-chess.webp",
        alt: "chess",
        href: "#",
      },
      time: "1 week ago",
      isUnread: false,
    },
    {
      id: "6",
      author: {
        name: "Nathan Peterson",
        src: "images/avatar-nathan-peterson.webp",
        href: "#",
      },
      text: "reacted to your recent post",
      link: {
        text: "5 end-game strategies to increase your win rate",
        href: "#",
      },
      time: "2 weeks ago",
      isUnread: false,
    },
    {
      id: "7",
      author: {
        name: "Anna Kim",
        src: "images/avatar-anna-kim.webp",
        href: "#",
      },
      text: "left the group",
      link: {
        text: "Chess Club",
        href: "#",
      },
      time: "2 week ago",
      isUnread: false,
    },
  ]);

  function markAllUnread() {
    setNotifications((prev) => prev.map((n) => ({ ...n, isUnread: false })));
  }

  function handleNotificationClick(id: string) {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isUnread: false } : n))
    );
  }

  return (
    <div>
      <header className="flex justify-between items-center mb-6 ">
        <div className="flex items-center gap-4">
          <h1 className="font-extrabold text-2xl text-vdgBlue">
            Notifications
          </h1>
          <span className="bg-blue px-3 py-1 text-white rounded-lg font-bold">
            {notifications && notifications.filter((n) => n.isUnread).length}
          </span>
        </div>
        <button onClick={markAllUnread}>Mark all as read</button>
      </header>
      {notifications &&
        notifications.map((n) => (
          <div
            key={n.id}
            onClick={() => handleNotificationClick(n.id)}
            className="notification flex items-center justify-between p-5 rounded-lg gap-2 mb-2"
            data-unread={n.isUnread}
          >
            <div className="flex items-start gap-3">
              <img src={n.author.src} alt={n.author.name} className="w-12" />
              <div className="post">
                <div>
                  <div>
                    <div>
                      <a href={n.author.href}>{n.author.name}</a>
                      <span> {n.text}</span>
                      {n.link && <a href={n.link.href}> {n.link.text}</a>}
                      {n.isUnread && <span className="isUnread"></span>}
                    </div>
                  </div>
                  <p className="time">{n.time}</p>
                </div>
                {n.privateMessage && (
                  <p className="privateMessage">{n.privateMessage}</p>
                )}
              </div>
            </div>
            {n.image && (
              <a href={n.image.href}>
                <img src={n.image.src} alt={n.image.alt} />
              </a>
            )}
          </div>
        ))}
    </div>
  );
};

export default Notification;
