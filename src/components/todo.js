export default function todo(title, description, dueDate, priority) {
  const todoProps = { title, description, dueDate, priority };

  return { ...todoProps };
}
