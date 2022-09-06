import React from "react";
import {animated, useSprings} from 'react-spring'

function Plane1(props) {
  return <g {...props}>
      <path
          fill="#e6e6e6"
          d="M84.756 1.156a3.758 3.758 0 00-6.414 1.968l-3.136 20.707a2.352 2.352 0 01-.32.86 2.258 2.258 0 01-.653.646L53.386 38.933a3.545 3.545 0 00-1.486 4.18l.01.028a3.642 3.642 0 003.7 2.49l12.303-.534a2.255 2.255 0 012.023 1.095 2.094 2.094 0 01.223 1.694l-11.164 39.26a3.581 3.581 0 00.718 3.312 3.777 3.777 0 003.175 1.312l92.868-7.513a3.765 3.765 0 002.253-.98 3.61 3.61 0 00.167-5.172l-.941-.987-72.48-75.962zm-4.942 2.18a2.186 2.186 0 01.683-1.276 2.273 2.273 0 013.17.1L156.122 78.1l.965 1.01a2.18 2.18 0 01.592 1.308 2.213 2.213 0 01-2.041 2.382L62.77 90.313a2.278 2.278 0 01-.78-.073 2.19 2.19 0 01-1.556-2.702l11.163-39.26a3.444 3.444 0 00.137-1.193l82.243 33.86a1.515 1.515 0 001.655-.316 1.445 1.445 0 00-.014-2.072 1.295 1.295 0 00-.196-.16l-78.95-53.57a3.553 3.553 0 00.206-.784l3.136-20.707z"
        ></path>
        <path
          fill="#ccc"
          d="M84.756 1.156a3.758 3.758 0 00-6.414 1.968l-3.136 20.707a2.352 2.352 0 01-.32.86 2.258 2.258 0 01-.653.646L53.386 38.933a3.545 3.545 0 00-1.486 4.18l.01.028a3.642 3.642 0 003.7 2.49l12.303-.534a2.255 2.255 0 012.023 1.095 2.094 2.094 0 01.223 1.694l-11.164 39.26a3.581 3.581 0 00.718 3.312 3.777 3.777 0 003.175 1.312l92.868-7.513a3.765 3.765 0 002.253-.98 3.61 3.61 0 00.167-5.172l-.941-.987-72.48-75.962zm-4.942 2.18a2.186 2.186 0 01.683-1.276 2.273 2.273 0 013.17.1L156.122 78.1l.965 1.01a2.18 2.18 0 01.592 1.308 2.213 2.213 0 01-2.041 2.382L62.77 90.313a2.278 2.278 0 01-.78-.073 2.19 2.19 0 01-1.556-2.702l11.163-39.26a3.444 3.444 0 00.137-1.193 3.51 3.51 0 00-.51-1.638c-.04-.071-.088-.14-.135-.21l-.002-.007a3.745 3.745 0 00-3.238-1.593l-12.31.537a2.17 2.17 0 01-2.217-1.503l-.005-.014a2.104 2.104 0 01.893-2.506l20.846-13.595a3.515 3.515 0 00.61-.493l.008-.002a3.519 3.519 0 00.469-.585 3.374 3.374 0 00.33-.648 3.553 3.553 0 00.205-.785l3.136-20.707z"
        ></path>
        <path
          fill="#ccc"
          d="M76.473 24.828l78.949 53.57a1.295 1.295 0 01.196.16 1.445 1.445 0 01.322 1.622 1.504 1.504 0 01-1.963.765l-82.243-33.86-1.453-.596.58-1.347.226.088.002.007 83.465 34.355-78.88-53.531-.007.002-.34-.236.849-1.203z">
      </path>
  </g>
}

function Plane2(props) {
  return <g {...props}>
      <path
          fill="#e6e6e6"
          d="M2.144 333.363a2.722 2.722 0 00-1.149 4.764l12.027 9.872a1.77 1.77 0 01.429.53 1.663 1.663 0 01.167.655l.855 18.232a2.66 2.66 0 002.108 2.527l.021.004a2.657 2.657 0 002.975-1.363l4.27-7.898a1.637 1.637 0 011.457-.847 1.582 1.582 0 011.163.507l20.848 21.982a2.701 2.701 0 002.38.817 2.729 2.729 0 002.027-1.484l30.015-60.953a2.72 2.72 0 00-3.015-3.863l-.983.211-75.595 16.307zm-.462 3.924a1.635 1.635 0 01.694-2.859l75.572-16.301 1.006-.218a1.635 1.635 0 011.81 2.317l-30.015 60.952a1.631 1.631 0 01-2.645.4l-20.847-21.981a2.607 2.607 0 00-.71-.541l52.412-38.5a1.089 1.089 0 00-.908-1.939.949.949 0 00-.175.062l-63.744 28.909a2.682 2.682 0 00-.423-.428l-12.027-9.873z"
        ></path>
        <path
          fill="#ccc"
          d="M2.144 333.363a2.722 2.722 0 00-1.149 4.764l12.027 9.872a1.77 1.77 0 01.429.53 1.663 1.663 0 01.167.655l.855 18.232a2.66 2.66 0 002.108 2.527l.021.004a2.657 2.657 0 002.975-1.363l4.27-7.898a1.637 1.637 0 011.457-.847 1.582 1.582 0 011.163.507l20.848 21.982a2.701 2.701 0 002.38.817 2.729 2.729 0 002.027-1.484l30.015-60.953a2.72 2.72 0 00-3.015-3.863l-.983.211-75.595 16.307zm-.462 3.924a1.635 1.635 0 01.694-2.859l75.572-16.301 1.006-.218a1.635 1.635 0 011.81 2.317l-30.015 60.952a1.631 1.631 0 01-2.645.4l-20.847-21.981a2.607 2.607 0 00-.71-.541 2.646 2.646 0 00-1.235-.307c-.061-.003-.123 0-.185.003h-.005a2.713 2.713 0 00-2.23 1.416l-4.27 7.904a1.583 1.583 0 01-1.79.812l-.01-.002a1.58 1.58 0 01-1.264-1.516l-.855-18.232a2.573 2.573 0 00-.085-.57v-.005a2.607 2.607 0 00-.196-.517 2.527 2.527 0 00-.29-.454 2.682 2.682 0 00-.423-.428l-12.027-9.873z"
        ></path>
        <path
          fill="#ccc"
          d="M14.132 347.588l63.744-28.91a.949.949 0 01.175-.06 1.089 1.089 0 01.908 1.938l-52.412 38.5-.925.68-.641-.877.14-.108.006.001 53.185-39.074-63.693 28.88-.001.006-.278.122-.449-.99z">
      </path>
  </g>
}

function Icon() {

  const planes = [
    <Plane1 key="plane-1" />,
    <Plane2 key="plane-2" />,
  ]

  const springs = useSprings(planes.length, planes.map((_, i) => {
    return {
      
      from: {transform: 'translate3d(-400px, 100px, 0px)', opacity: 0},
      to: {transform: 'translate3d(50px, 0px, 0px', opacity: 1},
      delay:  i * 1000
    }
  }))

  const animatedPlanes = springs.map((animatedStyle, index) => (
    // use `animated.g` instead of `g` as the `animatedStyle`
    // is a special react-spring flavour of the `style` property
    <animated.g
      key={index} // YOLO
      style={animatedStyle} // apply the animated style
    >
      {planes[index]}
    </animated.g>
  ));

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        data-name="Layer 1"
        viewBox="0 0 580.101 455.488"

      >
        <circle cx="452.82" cy="117.456" r="53.519" fill="#1589FF"></circle>
        <path
          fill="#1589FF"
          d="M456.752 448.302V325.287a6.508 6.508 0 016.5-6.5h14.76a6.508 6.508 0 016.5 6.5v123.015a6.508 6.508 0 01-6.5 6.5h-14.76a6.508 6.508 0 01-6.5-6.5zM425.56 448.302V325.287a6.508 6.508 0 016.5-6.5h14.76a6.508 6.508 0 016.5 6.5v123.015a6.508 6.508 0 01-6.5 6.5h-14.76a6.508 6.508 0 01-6.5-6.5z"
        ></path>
        <path
          fill="#2f2e41"
          d="M413.397 332.75V223.804a40.031 40.031 0 0140.03-40.031 40.031 40.031 0 0140.032 40.03V332.75a6.5 6.5 0 01-6.5 6.5h-67.062a6.5 6.5 0 01-6.5-6.5zM407.624 141.114l.056-2c-3.721-.103-7.001-.337-9.466-2.137a6.148 6.148 0 01-2.381-4.529 3.514 3.514 0 011.152-2.894c1.637-1.382 4.27-.935 6.188-.055l1.655.759-3.173-23.19-1.982.271 2.7 19.727c-2.608-.767-5.024-.437-6.679.96a5.471 5.471 0 00-1.86 4.493 8.133 8.133 0 003.2 6.073c3.167 2.314 7.283 2.43 10.59 2.522z"
        ></path>
        <path fill="#2f2e41" d="M413.103 109.04H423.874V111.04H413.103z"></path>
        <path
          fill="#1589FF"
          d="M473.992 332.674a6.454 6.454 0 01-2.093-4.514l-5.095-122.908a6.5 6.5 0 016.225-6.763l14.747-.612a6.506 6.506 0 016.763 6.225l5.096 122.909a6.508 6.508 0 01-6.226 6.763l-14.746.611a6.56 6.56 0 01-1.405-.091 6.453 6.453 0 01-3.266-1.62z"
        ></path>
        <path
          fill="#2f2e41"
          d="M492.81 249.488h-24a6.507 6.507 0 01-6.5-6.5v-34a18.5 18.5 0 0137 0v34a6.507 6.507 0 01-6.5 6.5z"
        ></path>
        <path
          fill="#1589FF"
          d="M338.689 295.037l-9.409-11.372a6.508 6.508 0 01.865-9.152l94.78-78.416a6.504 6.504 0 019.152.864l9.408 11.373a6.5 6.5 0 01-.865 9.151l-94.78 78.416a6.507 6.507 0 01-8.144.119 6.561 6.561 0 01-1.007-.983z"
        ></path>
        <path
          fill="#2f2e41"
          d="M408.585 243.96l-15.203-18.57a6.507 6.507 0 01.912-9.147l26.308-21.538a18.5 18.5 0 1123.438 28.63l-26.308 21.538a6.507 6.507 0 01-9.147-.912zM466.237 126.518c2.787-4.656 4.968-9.786 3.933-15.303-.925-4.926-4.47-8.762-9.567-9.265-3.07-.303-6.125.516-9.123 1.05a34.246 34.246 0 01-7.448.482 36.994 36.994 0 01-14.45-3.664 35.47 35.47 0 01-19.057-22.331c-3.042-11.074-.784-23.65 6.44-32.663l-2.507-.662 3.264 10.724a1.515 1.515 0 002.204.897 51.664 51.664 0 0140.2-6.427 48.947 48.947 0 0111.031 4.242c1.704.906 3.222-1.682 1.515-2.59a54.697 54.697 0 00-42.915-3.288 52.214 52.214 0 00-11.345 5.472l2.203.897-3.264-10.724a1.512 1.512 0 00-2.507-.662 40.207 40.207 0 00-8.241 30.483 37.94 37.94 0 0016.428 26.318 40.458 40.458 0 0030.554 6.142c2.936-.564 6.265-1.372 9.146-.143a7.9 7.9 0 014.234 5.208c1.632 5.531-1.145 10.784-3.983 15.383z"
        ></path>
        <path
          fill="#ccc"
          d="M439.426 231.74h-.037a2.466 2.466 0 01-2.399-1.927l.196-41.668a2.535 2.535 0 011.4-2.853c7.254-3.408 14.749-3.866 22.914-1.398a2.502 2.502 0 011.706 3.043l-21.365 42.943a2.465 2.465 0 01-2.415 1.86z"
        ></path>
        <path
          fill="#fff"
          d="M336 311.282H150a9.51 9.51 0 01-9.5-9.5v-138a9.51 9.51 0 019.5-9.5h186a9.51 9.51 0 019.5 9.5v138a9.51 9.51 0 01-9.5 9.5z"
        ></path>
        <path
          fill="#1589FF"
          d="M174.077 244.692l35.971.59H231a3.504 3.504 0 003.5-3.5v-1.223l-18.041-19.4a3.5 3.5 0 00-5.038-.09l-17.744 17.743a2.502 2.502 0 01-3.534.002l-2.627-2.622a3.503 3.503 0 00-4.949.002z"
        ></path>
        <path
          fill="#3f3d56"
          d="M336 311.282H150a9.51 9.51 0 01-9.5-9.5v-138a9.51 9.51 0 019.5-9.5h186a9.51 9.51 0 019.5 9.5v138a9.51 9.51 0 01-9.5 9.5zm-186-154a6.507 6.507 0 00-6.5 6.5v138a6.507 6.507 0 006.5 6.5h186a6.507 6.507 0 006.5-6.5v-138a6.507 6.507 0 00-6.5-6.5z"
        ></path>
        <path
          fill="#3f3d56"
          d="M315 178.782H171a3 3 0 010-6h144a3 3 0 010 6zM315.5 195.282h-144a3 3 0 010-6h144a3 3 0 010 6zM316 211.782h-69a3 3 0 010-6h69a3 3 0 010 6zM316.5 228.282h-69a3 3 0 010-6h69a3 3 0 010 6zM317 244.782h-69a3 3 0 010-6h69a3 3 0 010 6zM317.5 261.282h-144a3 3 0 010-6h144a3 3 0 010 6zM318 277.782H174a3 3 0 010-6h144a3 3 0 010 6zM318.5 294.282h-144a3 3 0 110-6h144a3 3 0 010 6zM231 245.782h-56a4.916 4.916 0 01-2.384-.61h-.014l-.254-.153a4.98 4.98 0 01-2.348-4.237v-30a5.006 5.006 0 015-5h56a5.006 5.006 0 015 5v30a5.006 5.006 0 01-5 5zm-57.714-2.54l.143.088a2.906 2.906 0 001.571.452h56a3.003 3.003 0 003-3v-30a3.003 3.003 0 00-3-3h-56a3.003 3.003 0 00-3 3v30a2.987 2.987 0 001.286 2.46z"
        ></path>
        {animatedPlanes}
      </svg>
    </>
  );
}

export default Icon;

