import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export const Counter = ({ target, duration }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <div ref={ref}>
      <CountUp
        start={0}
        end={inView ? target : 0}
        duration={duration}
        useEasing={true}
      >
        {({ countUpRef }) => (
          <span className="num_lg  text-white" ref={countUpRef} />
        )}
      </CountUp>
    </div>
  );
};
