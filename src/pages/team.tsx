export default function Team() {
  return (
    <div className="flex w-full flex-col gap-4 bg-yellow-400 px-4 pb-8 pt-[78px]">
      <div className="flex w-full flex-col items-center justify-center rounded-lg bg-[#e3d2bc] p-4 shadow-xl md:grid md:grid-cols-2 md:grid-rows-1 md:p-10">
        <div className="row-span-1">
          <div className="m-8 grid place-items-center">
            <img
              className="max-h-[400px] rounded-full shadow-lg"
              src="assets/john-fish.jpg"
              alt=""
            />
          </div>
          <div className="relative -top-8 grid w-full place-items-center italic"></div>
        </div>

        <div className="relative flex flex-col justify-center p-6">
          <h1 className="text-shadow relative p-4 text-6xl">John</h1>
          <h1 className="text-shadow relative pb-1 text-2xl">
            (The Water Walker)
          </h1>
          <div>
            <p className="relative p-4">
              Big fish, small fish. It really doesn’t matter. But John does
              prefer to not be skunked. When John is not fishing he is “forest
              bathing”, and in the same light John considers his fishing days to
              be “stream bathing”. Most days John covers miles of streams.
            </p>

            <ul>
              <li>
                <strong>Nymph, Dry, or Streamer:</strong> “Dry - the top water
                action is where it’s at”
              </li>
              <li>
                <strong>Water:</strong> “Small stream”
              </li>
              <li>
                <strong>Fuel:</strong> “Fresh made streamside tacos”
              </li>
              <li>
                <strong>Hydration:</strong> “An ice cold Diet Dr. Pepper”
              </li>
              <li>
                <strong>Weakness:</strong> “Kryptonite!”
              </li>
            </ul>
          </div>
        </div>
        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/816745952?h=272652d97e"
          className="relative col-span-2 aspect-video h-full w-[90%] max-w-4xl self-center justify-self-center rounded-xl"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex w-full flex-col-reverse rounded-lg bg-[#e3d2bc] md:grid md:grid-cols-2 md:grid-rows-1 md:p-10">
        <div className="relative flex flex-col justify-center p-6">
          <h1 className="text-shadow relative p-4 text-6xl">Gray</h1>
          <h1 className="text-shadow relative pb-1 text-2xl">
            (Mr. One & Done)
          </h1>
          <p className="relative p-4">
            Streamers are the only game in town for Gray. And not just any
            streamer. He religiously uses a #4 black sculpzilla, swinging,
            flipping and casting through every section of the stream. He will
            stay with one fly all day long, but what he won’t do is stay on a
            stream if the fish are not biting.
          </p>
          <ul>
            <li>
              <strong>Nymph, Dry, or Streamer:</strong> “Streamer - my results
              speak for themself”
            </li>
            <li>
              <strong>Water:</strong> “Any moving water that has pockets and
              holes”
            </li>
            <li>
              <strong>Fuel:</strong> “A tasty granola bar”
            </li>
            <li>
              <strong>Hydration:</strong> “Plain Water - does the body good”
            </li>
            <li>
              <strong>Weakness:</strong> “A slow day”
            </li>
          </ul>
        </div>
        <div className="">
          <div className="m-8 grid place-items-center">
            <img
              className="max-h-[400px] rounded-full shadow-lg"
              src="assets/gray-fish.jpg"
              alt=""
            />
          </div>
          <div className="relative -top-8 grid w-full place-items-center italic"></div>
        </div>
      </div>
      <div className="flex w-full flex-col rounded-lg bg-[#e3d2bc] md:grid md:grid-cols-2 md:grid-rows-1 md:p-10">
        <div className="row-span-1">
          <div className="m-8 grid place-items-center">
            <img
              className="max-h-[400px] rounded-full shadow-lg"
              src="assets/hans-fish2.jpg"
              alt=""
            />
          </div>
          <div className="relative -top-8 grid w-full place-items-center italic"></div>
        </div>

        <div className="relative flex flex-col justify-center p-6">
          <h1 className="text-shadow relative p-4 text-6xl">Hans</h1>
          <h1 className="text-shadow relative pb-1 text-2xl">
            (Mr. BoTangles)
          </h1>
          <p className="relative p-4">
            Laid back and easy going. That’s the style Hans developed growing up
            casting on the small mountain streams of rural Pennsylvania. Long
            hauls are nothing for this guy. He can shoot that line out to
            targets where most would have to close the gap a bit before giving
            it a try.
          </p>
          <ul>
            <li>
              <strong>Nymph, Dry, or Streamer:</strong> “Dry - isn’t that what
              fly fishing is?”
            </li>
            <li>
              <strong>Water:</strong> “Who cares as long as I can get in a long
              backcast”
            </li>
            <li>
              <strong>Fuel:</strong> “Cliff Bar”
            </li>
            <li>
              <strong>Hydration:</strong> “Any flavored sparkling water”
            </li>
            <li>
              <strong>Weakness:</strong> “Keeping my lines untangled”
            </li>
          </ul>
        </div>
      </div>
      <div className="flex w-full flex-col-reverse rounded-lg bg-[#e3d2bc] md:grid md:grid-cols-2 md:grid-rows-1 md:p-10">
        <div className="relative flex flex-col justify-center p-6">
          <h1 className="text-shadow relative p-4 text-6xl">Tom</h1>
          <h1 className="text-shadow relative pb-1 text-2xl">
            (The Tactician)
          </h1>
          <p className="relative p-4">
            When your introduction to fly fishing starts as a member of the
            Virginia Tech Fly Fishing Club, you are assured to become a
            tactician of the water. Shadow casting, double mending, and bow &
            arrow are all part of Tom’s arsenal as he meticulously works a
            stream.
          </p>
          <ul>
            <li>
              <strong>Nymph, Dry, or Streamer:</strong> “Nymphing - it really
              lets me work the columns”
            </li>
            <li>
              <strong>Water:</strong> “Any water that offers up clean drifts”
            </li>
            <li>
              <strong>Fuel:</strong> “Food”
            </li>
            <li>
              <strong>Hydration:</strong> “An ice cold beer”
            </li>
            <li>
              <strong>Weakness:</strong> “A brew pub within sight”
            </li>
          </ul>
        </div>
        <div className="">
          <div className="m-8 grid place-items-center">
            <img
              className="max-h-[400px] rounded-full shadow-lg"
              src="assets/tom-fish.jpg"
              alt=""
            />
          </div>
          <div className="relative -top-8 grid w-full place-items-center italic"></div>
        </div>
      </div>
      <div className="flex w-full flex-col rounded-lg bg-[#e3d2bc] md:grid md:grid-cols-2 md:grid-rows-1 md:p-10">
        <div className="row-span-1">
          <div className="m-8 grid place-items-center">
            <img
              className="max-h-[400px] rounded-full shadow-lg"
              src="assets/doug-fish.jpg"
              alt=""
            />
          </div>
          <div className="relative -top-8 grid w-full place-items-center italic"></div>
        </div>

        <div className="relative flex flex-col justify-center p-6">
          <h1 className="text-shadow relative p-4 text-6xl">Doug</h1>
          <h1 className="text-shadow relative pb-1 text-2xl">(The Oarsman)</h1>
          <p className="relative p-4">
            Just as content with staying on the sticks as he is with shooting
            out line, Doug is the ultimate double threat. Whether its landing
            chunky Cutthroats in Montana&apos;s Scapegoat Wilderness, or
            skillfully navigating his drift boat through sections like the
            &quot;Needle&apos;s Eye&quot; on the mighty Colorado, Doug feels
            right at home on, or in the water.
          </p>
          <ul>
            <li>
              <strong>Nymph, Dry, or Streamer:</strong> “Sure...Whatever”
            </li>
            <li>
              <strong>Water:</strong> “Give me some white sections please!”
            </li>
            <li>
              <strong>Fuel:</strong> “Anything organic”
            </li>
            <li>
              <strong>Hydration:</strong> “A stream chilled microbrew”
            </li>
            <li>
              <strong>Weakness:</strong> “S&V Pringles”
            </li>
          </ul>
        </div>
      </div>
      <div className="flex w-full flex-col-reverse rounded-lg bg-[#e3d2bc] md:grid md:grid-cols-2 md:grid-rows-1 md:p-10">
        <div className="relative flex flex-col justify-center p-6">
          <h1 className="text-shadow relative p-4 text-6xl">C.J.</h1>
          <h1 className="text-shadow relative pb-1 text-2xl">(10x.5)</h1>
          <p className="relative p-4">
            You might be wondering how&apos;d he get the nickname “10x.5”? Well,
            just fish a day with this guy and you will quickly see that he
            catches 10 times (10x) the fish you catch, in half (.5) the distance
            you cover. I personally have seen C.J. pull fish from a hole that
            was just walked/busted through. And watch out…..he&apos;s deadly
            with the dry, but often ties an insurance trailing nymph. And if you
            ask him about that trailer, you&apos;ll hear….. “I don&apos;t know,
            some little green caddis thing”.
          </p>
          <ul>
            <li>
              <strong>Nymph, Dry, or Streamer:</strong> “You know the answer to
              that……dry of course”
            </li>
            <li>
              <strong>Water:</strong> “Rock Gardens”
            </li>
            <li>
              <strong>Fuel:</strong> “Green Chili Double Cheddar Cheeseburger”
            </li>
            <li>
              <strong>Hydration:</strong> “Mountain Standard IPA”
            </li>
            <li>
              <strong>Weakness:</strong> “When the mercury drops below 70, or
              wind is above 5 mph”
            </li>
          </ul>
        </div>
        <div className="">
          <div className="m-8 grid place-items-center">
            <img
              className="max-h-[400px] rounded-full shadow-lg"
              src="assets/cj-fish.jpg"
              alt=""
            />
          </div>
          <div className="relative -top-8 grid w-full place-items-center italic"></div>
        </div>
      </div>
    </div>
  );
}
