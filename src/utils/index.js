export const compose = (...args) => (comp) => {
  return args.reduceRight((wraped, f) => f(wraped), comp);
}