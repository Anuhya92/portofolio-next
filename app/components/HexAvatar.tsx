import Image from "next/image";

export default function HexAvatar() {
  return (
    <div className="relative mx-auto h-64 w-64 sm:h-72 sm:w-72">
      <div className="absolute inset-0 rounded-full bg-cyan/25 blur-3xl" />
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan to-cyandim" />
      <div className="absolute inset-[4px] overflow-hidden rounded-full bg-surface">
        <Image
          src="/anuhya-photo.jpg"
          alt="Anuhya Talamanchi"
          fill
          sizes="288px"
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
