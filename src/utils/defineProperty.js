export default function defineProperty(target, descriptor) {
  descriptor.enumerable = descriptor.enumerable || false;
  descriptor.configurable = true;
  if ("value" in descriptor) descriptor.writable = true;
  Object.defineProperty(target, descriptor.key, descriptor);
}
