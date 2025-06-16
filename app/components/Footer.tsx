// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="max-w-6xl mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} BatirDemain. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
